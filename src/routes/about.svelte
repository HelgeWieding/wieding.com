<script>
	import TerminalImage from '../components/TerminalImage';
	import Terminal from '../components/Terminal';
	let helgeImg = `
KKKKKKKKKKKKKKKKKKKKKXXXXXXXXXXXXKXXXXXXXXKK0kdoc:;;,,,,,,,'''''',,,,,,,,;;;;;;,,,,,,,,,,,,,,,;;:ldkO00KKKKKK0000000KKKKKXXXXXXXNNNNNNNNNNNNNNNNNNNNNN
KKKKKKKKKKKKKKKKKKKKKXXXXXXXXXXXKKKKXXXKK0Oxoc:;,,,,,''''''''''''''''',,,,,,,,''',''''',,,,,,,,,;;:cclodxkxdddoodxkO000KKKKXXXXXXNNNNNNNNNNNNNNNNNNNNN
KKKKKKKKKKKKKKKKKKKKKXXXXXXXXXXXKKKXXK0Oxdlc;,,,,'''''''''''''''''''''''''''''''''''''''''''',,,,,;;;;;;:cc::::;::okOO00KKKXXXXXNNNNNNNNNNNNNNNNNNNNNN
KKKKKKKKKKKKKKKKKKKKKKXXXXXXXXXXXKKK0kdlc:;;;,,'''''''''''''.'''''''''.......''''''''',,,,,,'''',,,,;;;;;;;::::;::lxkOO00KKKXXXNNNNNNNNNNNNNNNNNNNNNNN
KKKKKKKKKKKKKKKKKKKKKKXXXXXXXXXKKKKOdl:;;;;;,,,,'''''''''''''''''''''...........'''''''',,,,,'''''',,;;;;;;;::::coxkOO00KKXXXXNNNNNNNNNNNNNNNNNNNNNNNN
KKKKKKKKKKKKKKKKKKKKKKKKXXXXXKKKK0kl::;,,,,,,,,,,'''''''''''''''''''''''''''''''''''''''''',,,,,'''',,,,;;;;;;:lxkOO00KKKXXXXNNNNNNNNNNNNNNNNNNNNNNNNN
KKKKKKKKKKKKKKKKKKKKKKKKKXXXKKKOxl::;;,,,,'''',;;;;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,''''....'''',,,,,'',,'',,;;;;;:lk00KKXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNN
0KKKKKKKKKKKKKKKKKKKKKKKKKXXKOoc::;;;,,,,,,',,,;;::;;;;;;;;;,,;;;;;;:::::::::::;;;;,,'''''''''''''''''''',,,;;;,;cxKXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
000KKKKKKKKKKKKKKKKKKKKKKKKOo:;;::;,,,'',,,,,;;::::::::::::;;:ccccllllllllclllllcccc::;;,,,''''''''''''',,,,,;;;;;ckKXNNNNNNNNNNNWWNNNNNNNNNNNNNNNNNNN
0000KKKKKKKKKKKKKKKKKKKKKOo:;;::;;,,,,',,,;;;:::::cc:::ccc::clloodddddddooooooooooollllccc:;;,,'',,'''''''',,,,;;;;ckXNNNNNNNNNNNWWWNNNNNNNNNNNNNNNNNN
000000KKKKKKKKKKKKKKKKK0xc:;:::;;,,,,,,,;;::cccccccccllcccllodddddxxxxdddddddddddddoooooolllcc:;;,,,,''''''''',,,;;:lkKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
000000000KKKKKKKKKKKKKOo:;;;:;;;,,,,,;;;::ccllllloooollllodddxxxxxxxxxxxddddddddddddddoooooollllc:;,,,''''.''''',,,,;cxKNNNNNNNNNNNNNNNNNNNNNNNNNNNNXX
000000000000KKKKKKKK0ko:;;;;;;;,,,,,;::::clloooooooooooddxxxxxxxxxxxxxxxxxxxxxxxxddddddddddooooollc:;,,''''''''''',,,;:dKXNNNNNNNNNNNNNNNNNNNNNNNNXXXX
0000000000000000K000kl:;;;;;;;;,,,;;::ccclooodddodddddxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxddddddddoooooolcc:;,'''''''''''',,,:dKNNNNNNNNNNNNNNNNNNNNNNXXXXXX
0000000000000000000Oo:;;;;;;;;,,,;;::cclloddddddddxxxxxxxxkkkkkkkkkkkkkkkkkkkxxxxxxxxdddddddddddooollcc:;,''''''''''',,,cOXNNNNNNNNNNNNNNNNNNXXXXXXXXX
000000000000000000Od::;;;;;;,,,,;:::clloodddxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkxxxxxxxxxdxxddddddooollllcc:;,'''''''''',,;o0NNNNNNNNNNNNNNNXXXXXXXXXXXX
0000000000000O0000xc;;;;;;,,,,,;:::cclooddxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxxxxxxxxxxxdddddooooollllcc;,''''''''',,;:lkXNNNNNNNNNNNNXXXXXXXXXXXXX
000000000000000OOkl;;;,,,,,,,,,;::cclooddxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxxxxxxxxxxddddddooooolllllc:;''''''''',,;;cdKXNNNNNNNXXXXXXXXXXXXXXXX
OOOOO00000000OOOkl;;;,,,,,,,,,;::ccloodddxxxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxxxxxdddddddooooooollllc:;'''.''''',;;;:dKXXXXXXXXXXXXXXXXXXXKKKK
OOOOOOOOOOOOOOOko:;,,,,,,,,,,,;:cclooddddxxxxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkkxxxxxxxxdddddddddooooolllllc:,''''..''',,,;lOXXXXXXXXXXXXXXXKKKKKKKK
OOOOOOOOOOOOOOOxc;,,'',,,,,,,;::ccloddddddddxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkxxxxxxxdddddoooddooooooollllc:;,'''.'.''',,,;dKXXXXXXXKKKKKKKKKKKKKKK
OOOOOOOOOOOOOOkd:,,'''','',,,;:ccclodddddddddxxxxxxxxxxxkxkkkkkkkkkkkkkkkkkkkkxxxxxxxddddddddoooooooooollllllc::;,'''...''',,,ckKKKKKKKKKKKKKKKKKKK000
OOOOOOOOOOOOkkxl;,,,,,,''',,,;:ccllooddddddddxxxxxxxxxxxxxkkkkkxxxkkkkkkkkkkkkkxxxxxxdddddddooooooooolllllllccc::;,'''...''',,:xKKKKKKKKKKKKKKK0000000
OOOOOOOOOOOkkxl:;,,,,,''''',,;:cclloodddddddddddxxxxxxxkkkkkkkkkkxxkkkkkkkkkkkkkxxxxxxxdddoodooooooolllllllcccc::;,'''''''''',:xKKKKKK00K0000000000000
kkkkkkkkkkkkkxo:;,,,'''''''',;:clllooddddddddddxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkxxxxxxxddddoddooooooollllllcccc::;,'',,'''''''ck000000000000000000000O
kkkkkkkkkkkkkxoc;,,'''''..'',;:clloooddddddddxxxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkxxxxxxddddddooooooooolllllcccc::;,''',,''''''lO000000000000000OOOOOOO
kkkkkkkkkkkkxool:,'''''...'',;:llloooddddddxxxxxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkxxxxdddddddddoooooooooolllccccc::,''',,''''',dO0000000OOOOOOOOOOOOOOO
kkkkkkkkkkkxxxxdc;''''.....',;clllooodddddxxxxxxxxxxxxxxxxxkxkkkkkkkkkkkkkkkkkkkxxxxddddddddooooooooooollllccccc::,'.'''''''':xOOOOOOOOOOOOOOOOOOOOkkk
kkkkkkkkkkxxxxxxl;,'''.....',:cllloooddddddddddddxxxxxxxxxxxxxxxxkkkkkkkkkkkkxxxxxddddoooooolllllllllllccccccccc::,'..'''''',lOOOOOOOOOOOOkkkkkkkkkkkk
xxxxxxxxxxxxxxxxd:,''......',:clllloodoooooooooooolooooooooddxxxxxxxxkkkkkkkxxxxxddooolccc::;;;;;;;:::::::::::::::;'....'''':dOkkkkkkkkkkkkkkkkkkkkkkk
xxxxxxxxxxxxxxxxxl;,'......',:cllllooollcccccc:::;;;;;;:::clloooddxxxxxxxxxxxddddoollc::;;,,''''''',,;;;;;;;;;;;::;'...'''':dkkkkkkkkkkkkkkkxxxxxxxxxx
xxxxxxxxxxxxxxxxxdc,'.'''''',:ccclllllccccccc:;;,,,,,,,,,;;:cccclloddddxxxxxdddooolc::;;;,,'''',,;;;;:::::;;;;;;;;;'...''',okkkkkkxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxo:'''''''',:cccccccccccccccc:::::;;;;;;;;;;::::clooddddxxddoollcc:;;,,,,;;::ccllllllllccc:::;;;;;'...'''cOOxkxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxdl;'''','',:clccc:ccclllloooooooollccc::::::::cccloddxxxxddollc::;;,,;;;;;::ccllllcccccccc::;;;;;'''''':OKkxxxxxxxxxxxxxxxxxxxxxxddd
xddddddddddddddddddo:,'',,,',:cllcccclllllllllllollc:::;;;;;::::cclloddxkkxxdoolc:;;;;;;;;;:;;;,;;;,,;;;;;;;;;;;;;;,'',':ONKkxxxxxxxxxdddddddddddddddd
ddddddddddddddddddddo:,'',,',;ccllccllc:::cc:::::::;;;:::::::::cccllodxxkkxxddol::;;;;::::::;'..,,....',,,,,,,;;;::,',,,cdO0xxxddddddddddddddddddddddd
dddddddddddddddddddddoc:;,,'';ccllccc:;;::;;,'...''..,:c:::cclllllllodxxkkkxxdoc:::::clc::col;.......';;,'',,,;;;::,'',::;lOxddddddddddddddddddddddddd
dddddddddddddddddddddollc;,'';cllllcc::;;,,;:,'.....':oolcc:clooollloddxxkxxxdlcc::clll::clllc;,,''',:::;;;,,,;;:::;'',;;,lkdddddddoooooooddoooooooooo
dddddddddddddddddoddoc;::;,'';ccllllccc:::cccc:;,,;;cloooollloodollooddxxxdddolcccccclllllcllllcc::::::::;;;;;;::::;'',,,;odoooooooooooooooooooooooooo
oooooooooooooooooooool:;;;;,,;ccllllllllcccccclllllloolloooodddolloooddddddddolcccccccllllcccccccccc:::::;;::::::::;,',,;cddoooooooooooooooooooooooooo
ooooooooooooooooooooool:;:;;,;:clloooollllcclllllllllllllloooooooooooddddddddollccccccllllllccccccc::::::::c:::::::;,',;;ldooooooooooooooooooooooooooo
oooooooooooooooooooooolc::c:;;ccloooooooooollllllloooooooodddoooodooddddddddoollcccccccllllllllllllcccccccccccccc::;,,;;:loloolllllloooooooooooooooooo
ooooooooooooooooooooooolcccc;;clooooodddooodoooooddddddddxxddoooddooddddddddoollcccccccllooolllllllolllcccccccccc::;,,;;cooooooooolloooooooooooooooooo
ooooooooooooooooooooooooollcc:cloooodddddddddddddddddxxxxxxddoooddoodddddddddoolccccccccloooloooollllllllllllcccc::;,;;:looooooooooooooooooooooooooooo
xxxxxxxxxxxxxxxxxxxxxxxxxdollc:loooodddddddddddddddxxxxxxxxddoooddoodxxxxxdddoolcccccccccloooooooolllllllllllcccc::;,;:ldddddddddddddddddddddddddddddd
xkkkkkkkkkkkkkkkkkkkkkkkkkdol::looooddddddddddddddddxxxxxxxxoooodoodxxxxxxddddollcccccccclooooooooooollllllllccc:::;,;cdkxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xkkkkkkkkkkkkkkkkkkkkkkkkkkdl::cooooodddddddddddxxxxxxxxxxxxdoooodddxxxxxxxddddollccccccclooooooooooollllllcccc::::,,:okkkkkkkkkxxxxxxxxxxxxxxxxxxxxxx
kkkkkkkkkkkkkkkkkkkkkkkkkkkxo:;clooooodddddddddddxxxxxxxxxxddoooodxxxkkkkxxxdddoollcccccclooodoooooolllllllcccc:::;,,:lc:ccclloodxxxxxxxxxxxxxxxxxxxxx
xxxxxddxxxxxxdddooooooollllll:;:loooooddddddddddddxxxkkkkxxxddoodddxxxkkkxxxxddoollccccccllooooooooollllllccccc:::;',;'........'',;:loddddoooooooolclc
xxdoc:;;:;;;,,,''''.........,;,:lloooodddddddddddxxxxxkkkxxxxdoodddxxxkkOkkkkxdoollccccccllooooooolllllllcccccc::;,',,...............',,;;;,,;;,;:;,;;
:;,'''.......................,,;clooooodddddddddddxxxxxkkkxxxddoooddxxkOOOOkkxxdllcccccccllooooollllllllllccccc::;,''....................'''',,,,;;,,,
.............................'';:lloooooddddddddddxxxxxxkkkxddoooloodxxkkkxxxxdoc::::cc:ccllooollllllllllccccccc:;''.......................'',,,',,',,
..............................',:clooooodddddddddddddxxkkkkxdolc:;:codddddddoolc:,,,,;;:cclloooollllllllllccccc:;,''........................'',,''''',
..............................',:cloooooddddddddxxddooxkxxxxdol::;;:cllllllccc:;,''',,;:cllooooolllllllllllccc::;,''.........................''','''',
..............................',;:llloodddxxxddxxddddddxxxxxxddocccc::::;;;;;;,,,,,;;::clllooooollllllclllccc::;,'''..........................'','''''
..............................',;:cclloooddddxxxxddddxxxxxxxxxxdolcccc:::;;;;;;;;;;;:ccclllloooollllllcclcccc:;,,'''..........................''',''''
..............................',;::::ccllodddxxdddddxxxxxxxxddolcc:;:::cccccc:;;,,,,;::clllllooolllcccccccc:;;;,'','...........................''',''.
..............................',;::::ccllloddxxdddddxxxxddodollc:;,,,,;;:ccc:;;,''''',,;:cccclllllccccccccc:;;,''''.............................''''''
..............................',;:::cclcclloodddddddxdoolccllc::;,,,',,;;::c:;,,''''.'',,;;;:::ccllccccc:::;,,,'''..............................''''''
...............................,;:::ccc:cccloododdddolc:;;;;;;,,',,,,;;;;::c:;,,,''''..'''',,,,;:clcccc::;;;,''.''...............................'''''
...............................';:::c:::ccccloooooolc:;,,,,,,,,,,,,;;:c::ccllc:::;,,,,'''.'''''',;cccc::;;;,,'....................................''''
................................';:ccc::::ccllooool:;;,,,,,;;::::::cclllollooddolc;;::;,,'''.'''',;:c::;;,,''.....................................''''
.................................';::;,,,;;:clloolc;,,,,,,;;:cc:::::cclooooddolc:;;;;;;,,,'''''''',::::,,,'........................................'''
..................................',,,,,,,;;;:cool:;,,''',,;;;;;;:;;;;;:::ccc:;;;;,,,,''''',''''',;:c:;'''..........................................''
...................................'',,,,,,,,:coolc:;,,,;::::::cccccccc::::::::::::::;;,,,;;;,,'';ccc;,..............................................'
....................................',,,,,,,,;clollc;,;clccc:::cclllllllllllllllcccc::;,,;;;::;,,;cc:,'.............................................''
......................................'',;;;,;;clllc;;clolcc::::ccllllllllllllllccc:;;,,,,;::::;;;;;,...............................................;:
......................................,,,;:;;;;;::::::cllllcc::::::ccccccc:::cc:::;;,,,,,;:::::;;,,'................................................':
......................................,;,,;;;:;;::;;:;::cclllc:;;;;::::::;;;;;;;;,,,',,,;::;;;;,,''................... ..............................;
.....................................';:,'',;;:::;;;;;;;;::ccc:::;;,,,,''''''''''''',,;;;;,,;;,,'.....................................................
....................................':llc;''',;;;,,,,;;;::::cccccccc:;,'',''',,,;;;;:::;;,,;;;,,'.....................................................
..................................':loollc:,'.',,,,;;:::::::clooolllllcccc:;;::cc::ccccc::;;,,,'......................................................
................................;coddoooool:,...',;;;::::::cloddolclllccclc:::ccc:::ccllc:;,'''........,;'............................................
............................',:odxxxdooooolc:,'..''',;;;;;::clccc:cclc::cc:::::cc:::::::;,,'..........';::'...........................................
.........................';codxxxxxxdoooodool:;'....''',,;;;;;;;;:cc:::ccc;,;;;::::;,,,''............',:::,...........................................
......................,:lodxxxkkkxxxdooooddoolc;'.......'''',,',;;::;;::::;,,,;;;;;,,''............',,;:::;...........................................
.....................,codxxkkkkkkxxxdddddddddooc;'.........''..',,;;,,;;,,,,'',,,'''..............',;;;:::;'..........................................
.....................,cdxxkkkkkkxxxddddddddddddol;,..............''''''.........................',;;;;;;::;,..........................................
.....................':oxkkkkkkxxxxdddddddddddddolc;,.........................................',;;;;;;;;::;;'.........................................
......................,coxxkkkkxxxxxxxddddddddddddool:;'....................................',;:::;;;;;;;;;;,.........................................
.......................;coxxxxxxxxxxxxxdddddddddddddoolc:;,...............................',;:::::;;;;;;;;;;,'........................................
.......................';lodxxxxxxxxxxxxxdddddddxddddddoolc:;;,'''''''''''''''''''......',;:ccc::;;;;;;;:::;;'........................................
........................';clodxxxxxxxxxxxddddddxxxxxddddddoolc:;,,,,,'',,,;;,,;,,'''''',;:ccccc::;;::;;;:::;,'........................................
..........................,:loddxxxxxxxxxxxdddddxxxxxxdddddooolcc::::;;,;::::;;,,''',;::ccllccc::::::;;::::;,.........................................
..........................';clodxxxxxxxxxxddddddxxxxxxxxxdddoolllccc:::ccc:::;;,,,;:ccllllllcc::::::;;::::;,..........................................
...........................';coddxxxxxxxxxddddddxxxxxxxxxddddooollccc:ccc:::;;;;:cclllooollc:::::::;:::::;,...........................................
............................,clodxxxxxxxxxxdddddxxxxxxxxxxddddooolllc:::::;;;::cclooddoolcc:::ccc:::::::;'............................................`
	
	let helgeInfo = `All the Work anND NOOO Play Makes Helge a dull Boy. 
									 All the Work an No Play Makes Helge a DUll Boy. All the Work an NO Play Makes Helge a dull BOY.
									 All the Work anddd No Play Makes Helge a dull Boy. 
									 All the Work an No Play Makes Helge a DUll Boy. 
									 All the Work an NO PLAY Makes Helge a dull BOY.
									 All the Work anD No Play Makes Helge a dull Boy. 
									 All the Work an No Play Makes Helge a DUll Boy. 
									 All the Work an NO PlaY makes Helge a dull BOY.
									 ALL THE WORK AND No Play Makes Helge a dull Boy. 
									 All the Work an No Play Makes Helge a DUll Boy. 
									 All the Work an NO Play Makes Helge a dull BoY.
									 ALL THE WORK AND No Play Makes Helge a dull Boy. 
									 All the Work an No Play Makes Helge a DUll Boy. 
									 All the Work an NO Play Makes Helge a dull BoY.
									`

	
	let descriptionDone = false;

	function handleDone(event) {
		descriptionDone = true;
	}
	

</script>
<style>
	.info-box {
		margin-left: 20px;
		max-width: 50%;
	}
	.child {
		flex: 1;
	}
	.wrapper {
		display: flex;
		justify-content: space-evenly;
	}
	.skills {
		margin-top: 10%;
	}
</style>
<svelte:head>
	<title>About</title>
</svelte:head>
<div class="wrapper">
	<!-- <Terminal text={headerText}></Terminal> -->
	<TerminalImage text={helgeImg}></TerminalImage>
	<div class="info-box">
		<div class="child">
  		<Terminal text={helgeInfo} on:message={handleDone} speed={20}></Terminal>
		</div>
		<div class="child">
			{#if descriptionDone}
				<div class="skills"></div>
				<Terminal text={`Flutter: ***`} } speed={50} ></Terminal>
				<Terminal text={`Angular: *****`} speed={50} ></Terminal>
				<Terminal text={`Ionic:   ****`} } speed={50} ></Terminal>
				<Terminal text={`Kacken:  *****`} speed={50} ></Terminal>
			{/if}
		</div>

	</div>
</div>