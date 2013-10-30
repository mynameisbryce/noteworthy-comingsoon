<?php

if(!isset($_GET['fngsrkah']) || $_GET['fngsrkah'] != 'fDJSY6')
  exit;

$EmailFrom = "bryce@handsome.is";
$EmailTo = "bryce@handsome.is";
$Subject = "Signup: Noteworthy Coming Soon";
$Email = Trim(stripslashes($_POST['Email'])); 


// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";


// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success) {
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>