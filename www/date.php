<?php

	date_default_timezone_set('Europe/Paris');
	$startDate = new DateTime('now');
	$endDate = new DateTime('2016-04-18 20:00:00');
	$interval = $startDate->diff($endDate);

	$returnInterval = array(
		'day' => $interval->format('%d'),
		'hour' => $interval->format('%H'),
		'minute' => $interval->format('%I'),
		'second' => $interval->format('%S')
	);

	// echo ($interval->format('%d:%H:%I:%S'));
	// echo json_encode($returnInterval);

	if($startDate >= $endDate){
		echo "http://www.google.fr";
	}else{
		echo ($endDate->format('Y/m/d H:i:s'));
	}

?>