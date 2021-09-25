
<?php
    $inData = getRequestInfo();
    
    $userId = $inData["userId"];
    $firstName = $inData["FirstName"];
    $lastName = $inData["LastName"];
    $phoneNumber = $inData["Phone"];
    $email = $inData["Email"];
    // work on having the date added (do we want the user to enter or automatically enter it)
    // check to see if I have to initialize first

    $conn = new mysqli("localhost", "TheBeast", "WeLoveCOP4331", "COP4331");
    if ($conn->connect_error)
    {
        returnWithError( $conn->connect_error );
    }
    else
    {
        $stmt = $conn->prepare("INSERT into Contacts (UserID,FirstName,LastName,Phone,Email) VALUES (?,?,?,?,?)");
        $stmt->bind_param("sssss", $userId, $firstName, $lastName, $phoneNumber, $email);
        $stmt->execute();
        $stmt->close();
        $conn->close();
        returnWithError("");
    }

    function getRequestInfo()
    {
        return json_decode(file_get_contents('php://input'), true);
    }

    function sendResultInfoAsJson( $obj )
    {
        header('Content-type: application/json');
        echo $obj;
    }
    
    function returnWithError( $err )
    {
        $retValue = '{"Contact ID":['. $userId .'], "error":"' . $err . '"}';
        sendResultInfoAsJson( $retValue );
    }
    
?>
