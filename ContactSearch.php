<?php

    $inData = getRequestInfo();
    
    $searchResults = "";
    $searchCount = 0;
    $date = date('d/m/y h:i:s');


    $conn = new mysqli("localhost", "TheBeast", "WeLoveCOP4331", "COP4331");
    if ($conn->connect_error)
    {
        returnWithError( $conn->connect_error );
    }
    else
    {
        // fix search (i think we should ask for one parameter, but we'll see)
       $stmt = $conn->prepare("select ID, FirstName, LastName, Phone, Email from Contacts where (FirstName like ? or LastName like ? or Phone like ? or Email like ?) and UserID=?");
		$searchVar = "%" . $inData["search"] . "%";
		$stmt->bind_param("sssss", $searchVar, $searchVar, $searchVar, $searchVar, $inData["userId"]);
		$stmt->execute();

		$result = $stmt->get_result();

		while($row = $result->fetch_assoc())
		{
			if( $searchCount > 0 )
			{
				$searchResults .= ",";
			}
			$searchCount++;
			$searchResults .= '["' . $row["ID"] . '", "' . $row["FirstName"] . '", "' . $row["LastName"] . '", "' . $row["Phone"] . '", "' . $row["Email"] . '"]';
		}

        
        if( $searchCount == 0 )
        {
            returnWithError( "No Records Found" );
        }
        else
        {
            returnWithInfo( $searchResults );
        }
        
        $stmt->close();
        $conn->close();
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
        $retValue = '{"id":0,"firstName":"","lastName":"","error":"' . $err . '"}';
        sendResultInfoAsJson( $retValue );
    }
    
    function returnWithInfo( $searchResults )
    {
        $retValue = '{"results":[' . $searchResults . '], "date":[' . $date . '], "error":""}';
        sendResultInfoAsJson( $retValue );
    }
    
?>
