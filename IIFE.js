let globalstuff = (function () {
    var privatePerson = 'Ben';
    var privateStuff = function (param) {
        function myInternalValidation(param) {
            if (param != null) {
                console.log('Thank you for sending us the  correct parameter');
                return true;
            }else{
                console.log('Could you please send us the valid parameter');
                return false;
            }
        }
        myInternalValidation(param) && console.log('Let', privatePerson, 'help you Mr.', param);
    }
    return {
        letsLove: privateStuff
    }
}());

globalstuff.letsLove('Amit');





