$IP = (get-netipaddress).ipv4address | Select-String "192*"
$USER = [Environment]::UserName
$HOSTNAME = hostname
$VERSION = $HOST.Version.Major
$DATE = Get-Date -Format "dddd MM/dd/yyyy"

$BODY = "This machine's IP is $IP.  User is $USER.  Hostname is $HOSTNAME.  PowerShell Version $VERSION.  Today's Date is $DATE"

Write-Host($BODY)
$BODY | Out-File -FilePath output.txt