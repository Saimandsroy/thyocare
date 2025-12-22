/**
 * Google Apps Script for Hospital Booking Form
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Paste this code
 * 4. Create a Google Sheet and copy its ID from the URL
 * 5. Replace SPREADSHEET_ID and EMAIL below
 * 6. Deploy as Web App:
 *    - Click Deploy > New deployment
 *    - Select type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Deploy and copy the URL
 * 7. Replace SCRIPT_URL in BookingForm.js with the deployed URL
 */

// Configuration - YOUR VALUES
const SPREADSHEET_ID = '1nV4hOV54HTgCEb7sENebRyOtkVGWLncvnCMnPE_pFE0';
const HOSPITAL_EMAIL = 'manishvgandhi@gmail.com';
const SHEET_NAME = 'Bookings';

/**
 * Handle POST requests from the booking form
 */
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Open the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      // Add headers
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Mobile',
        'Address',
        'Package',
        'Price',
        'Status'
      ]);
      // Format headers
      sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
    }

    // Format timestamp for Indian timezone
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium'
    });

    // Append the booking data
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.mobile || '',
      data.address || '',
      data.package || '',
      data.price ? `₹${data.price}` : '',
      'Pending'
    ]);

    // Send email notification to hospital
    sendEmailNotification(data, timestamp);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Booking received successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log error and return error response
    console.error('Error processing booking:', error);

    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'Hospital Booking API is running'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Send email notification to hospital
 */
function sendEmailNotification(data, timestamp) {
  const subject = `New Health Package Booking - ${data.name}`;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">New Booking Received</h1>
      </div>
      
      <div style="padding: 20px; background: #f9fafb;">
        <h2 style="color: #1e3a8a; margin-top: 0;">Customer Details</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Mobile:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
              <a href="tel:${data.mobile}">${data.mobile}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Address:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.address}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Package:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.package}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Price:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">₹${data.price}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Booking Time:</td>
            <td style="padding: 10px;">${timestamp}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 8px;">
          <p style="margin: 0; color: #1e40af;">
            <strong>Action Required:</strong> Please contact the customer to confirm the booking and schedule sample collection.
          </p>
        </div>
      </div>
      
      <div style="padding: 15px; background: #1e3a8a; text-align: center;">
        <p style="color: white; margin: 0; font-size: 12px;">
          Thyrocare Services - Tests You Can Trust
        </p>
      </div>
    </div>
  `;

  const plainBody = `
New Booking Received

Customer Details:
- Name: ${data.name}
- Mobile: ${data.mobile}
- Address: ${data.address}
- Package: ${data.package}
- Price: ₹${data.price}
- Booking Time: ${timestamp}

Please contact the customer to confirm the booking.
  `;

  // Send email
  MailApp.sendEmail({
    to: HOSPITAL_EMAIL,
    subject: subject,
    body: plainBody,
    htmlBody: htmlBody
  });
}

/**
 * Test function - Run this to test the sheet and email functionality
 */
function testDoPost() {
  // Test data - simulates a booking submission
  const testData = {
    name: 'Test User',
    mobile: '9876543210',
    address: '123 Test Street, Mumbai',
    package: 'Aarogyam C Pro With UTSH (72 Parameters)',
    price: 1399
  };

  try {
    // Open the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    Logger.log('✅ Successfully opened spreadsheet: ' + spreadsheet.getName());

    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      // Add headers
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Mobile',
        'Address',
        'Package',
        'Price',
        'Status'
      ]);
      // Format headers
      sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
      Logger.log('✅ Created new "Bookings" sheet with headers');
    } else {
      Logger.log('✅ Found existing "Bookings" sheet');
    }

    // Format timestamp for Indian timezone
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium'
    });

    // Append test data
    sheet.appendRow([
      timestamp,
      testData.name,
      testData.mobile,
      testData.address,
      testData.package,
      '₹' + testData.price,
      'Pending'
    ]);

    Logger.log('✅ Successfully added test booking to sheet!');
    Logger.log('📧 Sending test email to ' + HOSPITAL_EMAIL + '...');

    // Send test email
    sendEmailNotification(testData, timestamp);

    Logger.log('✅ Test complete! Check your sheet and email.');

  } catch (error) {
    Logger.log('❌ Error: ' + error.toString());
    Logger.log('Make sure the SPREADSHEET_ID is correct and you have edit access to the sheet.');
  }
}
