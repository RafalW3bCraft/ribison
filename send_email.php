
<?php
require_once 'attached_assets/PHPMailer_1750945674174.php';
require_once 'attached_assets/SMTP_1750945660371.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

function sendContactEmail() {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        return json_encode(['success' => false, 'message' => 'Invalid request method']);
    }

    try {
        // Get form data
        $name = $_POST['name'] ?? '';
        $email = $_POST['email'] ?? '';
        $phone = $_POST['phone'] ?? '';
        $company = $_POST['company'] ?? '';
        $product_interest = $_POST['product_interest'] ?? '';
        $message = $_POST['message'] ?? '';
        $newsletter = isset($_POST['newsletter']) ? 'Yes' : 'No';
        
        // Email configuration - UPDATE THESE WITH YOUR ACTUAL CREDENTIALS
        $smtp_host = "smtp.gmail.com";  // or your email provider's SMTP
        $smtp_port = 587;
        $smtp_username = "your-email@gmail.com";  // Replace with your actual email
        $smtp_password = "your-app-password";     // Replace with your email app password
        $recipient_email = "info@ribison.com";   // Update to your desired recipient email
        
        // Create PHPMailer instance
        $mail = new PHPMailer(true);
        
        // Server settings
        $mail->isSMTP();
        $mail->Host = $smtp_host;
        $mail->SMTPAuth = true;
        $mail->Username = $smtp_username;
        $mail->Password = $smtp_password;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = $smtp_port;
        
        // Recipients
        $mail->setFrom($smtp_username, 'Ribison Chemicals Contact Form');
        $mail->addAddress($recipient_email);
        $mail->addReplyTo($email, $name);
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = "New Contact Form Submission from " . $name;
        
        $mail->Body = "
        <h2>New contact form submission received:</h2>
        <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
        <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>
        <p><strong>Company:</strong> " . htmlspecialchars($company) . "</p>
        <p><strong>Product Interest:</strong> " . htmlspecialchars($product_interest) . "</p>
        <p><strong>Newsletter Subscription:</strong> " . $newsletter . "</p>
        <p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>
        <hr>
        <p><em>This message was sent from the Ribison Chemicals website contact form.</em></p>
        ";
        
        $mail->AltBody = "
        New contact form submission received:
        
        Name: " . $name . "
        Email: " . $email . "
        Phone: " . $phone . "
        Company: " . $company . "
        Product Interest: " . $product_interest . "
        Newsletter Subscription: " . $newsletter . "
        
        Message:
        " . $message . "
        
        ---
        This message was sent from the Ribison Chemicals website contact form.
        ";
        
        $mail->send();
        return json_encode(['success' => true, 'message' => 'Email sent successfully']);
        
    } catch (Exception $e) {
        return json_encode(['success' => false, 'message' => 'Error sending email: ' . $e->getMessage()]);
    }
}

// Handle the request
header('Content-Type: application/json');
echo sendContactEmail();
?>
