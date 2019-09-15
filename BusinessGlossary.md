<p align="center">
  <a href="" rel="noopener">
 <img width=200px src="src/client/assets/images/Logo.png" alt="Optimum Voyage logo"></a>
</p>

<h3 align="center">Business Glossary</h3>

## Glossary:

AddedCost - Added cost in percentage facing the suggested route.<br>
AftDraft - The draft aft (stern) is measured in the perpendicular of the stern. It's measured in meters. <br>
AvgSpeed - Average Speed in knots. A knot is 1,852 Km/h.<br>
DistOG - Distance over ground in nautical mile. A nautical mile is 1,852 km/h.<br>
DistTW - Distance through water in nautical mile.<br>
ECA - Emission Control Areas are designated areas where vessels can only operate with LSFO.<br>
ETA - Estimate Time of Arrival.<br>
ETD - Estimate Time of Departure.<br>
ForwardDraft - in meters. The draft forward (bow) is measured in the perpendicular of the bow.<br>
HFO - Heavy Fuel Oil in Tons.<br>
LAT - Latitude.<br>
LON - Longitude.<br>
LSFO - Low Sulphur Fuel Oil in Tons, it's the Fuel that is mandatory to use in the ECA.<br>
MaxWaveHs - Maximum wave height in meters.<br>
MMSI - Maritime Mobile Service Identity it’s the ID that is used for radio/frequency communications and it can be used as an unique identifier of a Vessel.<br>
RPM - Revolutions per minute - It is a unit of rotational speed or the frequency of rotation around a fixed axis.<br>
UTC - Coordinated Universal Time.<br>

## Types of Users/Roles:
Super Users are only for the OV Staff<br>
Admin Users are the specific Organisation Admin Staff<br>
Operator Users are the specific operators of a certain Organisation Operators Staff<br>

## Other business concepts:
Vessels are the Ships from a certain Organisation.<br>
Vessels go on Voyages which can have 3 status, created, ongoing or completed. Voyages have Routes between Waypoints.<br>
OV suggests routes between waypoints with the goal of maximising the performance of the voyage and we call that Suggested Routes.<br>
Every time (typically every 12h) the captain of the ship reports back with the Vessel Report OV processes the data of that report and creates new Suggested Routes.<br>
Waypoints are points on the map with Lon and Lat defined.<br>
Ports are waypoints (Lon, Lat).<br>
Organizations have operators and admins that can use the app that we are developing and OV will have a Super User Admin that can Admin the whole app.<br>
Users from the Organisations can only see and operate their own vessels and routes.<br>
The Organisations can choose the type of report/optimization that they want for their voyages and that means that OV will build their optimisations based on this choice:
and build 1 of these 3 reports Fixed ETA, Least cost arrival, Earliest arrival.<br>

