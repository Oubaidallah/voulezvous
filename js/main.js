var app = angular.module('voulezVousApp', []);

app.controller('voulezVousCtrl', function($scope,$http,$location,$anchorScroll,$timeout){
	var currentUser = localStorage.getItem('currentUserId');
    $scope.btnDisable = false;
    $scope.E = 0;
    $scope.I = 0;
    $scope.EI = [];
    $scope.EItab = [];
    $scope.S = 0;
    $scope.N = 0;
    $scope.SNtab = [];
    $scope.SN = [];
    $scope.T = 0;
    $scope.F = 0;
    $scope.FT = [];
    $scope.FTtab = [];
    $scope.J = 0;
    $scope.P = 0;
    $scope.JP = [];
    $scope.JPtab = [];
    $scope.resulatReady = false;
    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.personality = "";
    $scope.questions = [];
	$http.get('js/questions.json').success(function(data) {
		for (var i = 0; i < data.questions.length; i++) {
            if (data.questions[i].required) {
                $scope.questions.push(data.questions[i]);
            }else {
                switch (data.questions[i].cat) {
                    case 'EI' : $scope.EI.push(data.questions[i]); break ;
                    case 'SN' : $scope.SN.push(data.questions[i]); break ;
                    case 'FT' : $scope.FT.push(data.questions[i]); break ;
                    case 'JP' : $scope.JP.push(data.questions[i]); break ;
                }
            }
        }
        $scope.questions = shuffle($scope.questions);
	});
    $scope.setAnswer = function (v,o,q) {
        if (o == 'l') {
            q.scoreL = v;
            q.scoreR = 0;
        } else {
            q.scoreL = 0;
            q.scoreR = v;
        }
        switch (q.cat) {
            case "EI" : 
                if(containsObject(q, $scope.EItab) === -1){
                    $scope.EItab.push(q);
                } else {
                    $scope.EItab[containsObject(q, $scope.EItab)] = q;
                }
                break;
            case "SN" : 
                if(containsObject(q, $scope.SNtab) === -1){
                    $scope.SNtab.push(q);
                } else {
                    $scope.SNtab[containsObject(q, $scope.SNtab)] = q;
                }
                break;
            case "FT" :
                if(containsObject(q, $scope.FTtab) === -1){
                    $scope.FTtab.push(q);
                } else {
                    $scope.FTtab[containsObject(q, $scope.FTtab)] = q;
                }
                break;
            case "JP" : 
                if(containsObject(q, $scope.JPtab) === -1){
                    $scope.JPtab.push(q);
                } else {
                    $scope.JPtab[containsObject(q, $scope.JPtab)] = q;
                }
                break;
        }
        if ($scope.EItab.length == 10) {
            l = 0;
            r = 0;
            for (var i = 0; i < $scope.EItab.length; i++) {
                l += $scope.EItab[i].scoreL;
                r += $scope.EItab[i].scoreR;
            }
            if (l == r) {
                for (var i = 0; i < $scope.EI.length; i++) {
                    $scope.questions.push($scope.EI[i]);
                }        
            }
        }
        if ($scope.SNtab.length == 10) {
            l = 0;
            r = 0;
            for (var i = 0; i < $scope.SNtab.length; i++) {
                l += $scope.SNtab[i].scoreL;
                r += $scope.SNtab[i].scoreR;
            }
            if (l == r) {
                for (var i = 0; i < $scope.SN.length; i++) {
                    $scope.questions.push($scope.SN[i]);
                }
            }
        }
        if ($scope.FTtab.length == 10) {
            l = 0;
            r = 0;
            for (var i = 0; i < $scope.FTtab.length; i++) {
                l += $scope.FTtab[i].scoreL;
                r += $scope.FTtab[i].scoreR;
            }
            if (l == r) {
                for (var i = 0; i < $scope.FT.length; i++) {
                    $scope.questions.push($scope.FT[i]);
                }
            }
        }
        if ($scope.JPtab.length == 10) {
            l = 0;
            r = 0;
            for (var i = 0; i < $scope.JPtab.length; i++) {
                l += $scope.JPtab[i].scoreL;
                r += $scope.JPtab[i].scoreR;
            }
            if (l == r) {
                for (var i = 0; i < $scope.JP.length; i++) {
                    $scope.questions.push($scope.JP[i]);
                }
            }
        }
    }
    $scope.nextPage = function () {
        $location.hash('top');
        $anchorScroll();
        start = $scope.currentPage * $scope.pageSize;
        end = start + 5;
        b = true;
        for (var i = start; i < end; i++) {
            if ($scope.questions[i].scoreL == 0 && $scope.questions[i].scoreR == 0) {
                b = false;
            }
        }
        if (b) {
            $scope.currentPage++;
        } else {
            alert("answer all the questions");
        }
    }
    $scope.prevPage = function () {
        $scope.currentPage = $scope.currentPage - 1;
    }
    $scope.getAnswer = function () {
        if (!$scope.btnDisable) {
            $scope.btnDisable = true;
        for (var i = 0; i < $scope.EItab.length ; i++) {
            $scope.E = $scope.E + $scope.EItab[i].scoreL;
            $scope.I = $scope.I + $scope.EItab[i].scoreR;
        }
        for (var i = 0; i < $scope.SNtab.length ; i++) {
            $scope.S = $scope.S + $scope.SNtab[i].scoreL;
            $scope.N = $scope.N + $scope.SNtab[i].scoreR;
        }
        for (var i = 0; i < $scope.FTtab.length ; i++) {
            $scope.F = $scope.F + $scope.FTtab[i].scoreL;
            $scope.T = $scope.T + $scope.FTtab[i].scoreR;
        }
        for (var i = 0; i < $scope.JPtab.length ; i++) {
            $scope.J += $scope.J + $scope.JPtab[i].scoreL;
            $scope.P += $scope.P + $scope.JPtab[i].scoreR;
        }
        if ($scope.E > $scope.I) {
            $scope.personality += "E";
        } else {
            $scope.personality += "I";
        }
        if ($scope.S > $scope.N) {
            $scope.personality += "S";
        } else {
            $scope.personality += "N";
        }
        if ($scope.F > $scope.T) {
            $scope.personality += "F";
        } else {
            $scope.personality += "T";
        }
        if ($scope.J > $scope.P) {
            $scope.personality += "J";
        } else {
            $scope.personality += "P";
        }
		alert($scope.personality);
		//alert(currentUser);
		
		$http.post('http://voulezvous.io/api/postTest',
            { "id": currentUser, "personality": $scope.personality },
            { "Content-Type": "application/json" }).then(function (s) { 
				alert(s);
				//window.location.href = 'index.html';
			}, function (e) { console.log(e); alert(e); })
		
		//alert(currentUser);
		
        //$timeout(function () { document.getElementById('myForm').submit(); } , 1000);
        } 
		
        //document.getElementById('myForm').submit();
    }
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    function containsObject(obj, list) {
        val = -1;
        for (var i = 0; i < list.length; i++) {
            if (list[i].id == obj.id) {
                val = i;
            }
        }
        return val;
    }
});

app.filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start;
            return input.slice(start);
        }
        return [];
    }
});