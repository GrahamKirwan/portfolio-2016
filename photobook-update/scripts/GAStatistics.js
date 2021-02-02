	function callGAServer(sGAAccount,sURL)
	{
		var firstTracker = _gat._getTracker(sGAAccount); 
		firstTracker._initData(); 
		firstTracker._trackPageview(sURL);
	}
