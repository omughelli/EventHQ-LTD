
<?php
        
        $name = $_POST['name'];
        $email = $_POST['email'];
        $location = $_POST['location'];
        $service = $_POST['service'];
        $phoneNumber = $_POST['number'];
        $opinion = $_POST['textarea'];

        $recipient = "info@eventHQ.com";
        $mailHeader = "from: $email";
        $subject = "$name wants us to plan for a $service at $location and we can help by $opinion";
        $message = "From $name for a $service phone number $phoneNumber";
        mail($recipient, $subject, $message, $mailHeader) or die('Error');
        if(mail()){
            echo "<script>alert('Mail submitted! Thank you for planning with us.')</script>";
        }
        else{
            echo "<script>alert('not sent')</script>";
        }
        
?>