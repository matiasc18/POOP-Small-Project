
<?php
    $inData = getRequestInfo();
    $ID = $inData["ID"];
    $firstName = $inData["FirstName"];
    $lastName = $inData["LastName"];
    $phoneNumber = $inData["Phone"];
    $email = $inData["Email"];
    

    $conn = new mysqli("localhost", "TheBeast", "WeLoveCOP4331", "COP4331");
    if ($conn->connect_error)
    {
        returnWithError( $conn->connect_error );
    }
    else
    {
        $stmt = $conn->prepare("UPDATE Contacts SET FirstName=?,LastName=?,Phone=?,Email=? WHERE ID=?");
        $stmt->bind_param("sssss", $inData["FirstName"], $inData["LastName"], $inData["Phone"], $inData["Email"], $inData["ID"]);
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
        $retValue = '{"error":"' . $err . '"}';
        sendResultInfoAsJson( $retValue );
    }
    
?>
