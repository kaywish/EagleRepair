<?php

// Define some constants
define("RECIPIENT_NAME", "Don");
define("RECIPIENT_EMAIL", "Eaglerepairsinc@gmail.com");

// Read the form values
$success = false;

// Update these variable names to match the form's `name` attributes
$senderName = isset($_POST['username']) ? preg_replace("/[^\.\-\' a-zA-Z0-9]/", "", $_POST['username']) : "";
$senderEmail = isset($_POST['email']) ? preg_replace("/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email']) : "";
$phone = isset($_POST['phone']) ? preg_replace("/[^\.\-\' a-zA-Z0-9]/", "", $_POST['phone']) : "";
$subject = isset($_POST['subject']) ? preg_replace("/[^\.\-\' a-zA-Z0-9]/", "", $_POST['subject']) : "";
$message = isset($_POST['message']) ? preg_replace("/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message']) : "";

// If all values exist, send the email
if ($senderName && $senderEmail && $phone && $subject && $message) {
    $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
    $headers = "From: " . $senderName . " <" . $senderEmail . ">";
    $msgBody = "Phone: " . $phone . "\nSubject: " . $subject . "\nMessage: " . $message;
    $success = mail($recipient, $subject, $msgBody, $headers);

    // Redirect after successful submission
    if ($success) {
        header('Location: contact.html');
    } else {
        echo "Email sending failed. Please try again.";
    }
} else {
    // Redirect after unsuccessful submission
    echo "Please fill in all required fields.";
}
?>
