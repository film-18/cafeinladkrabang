//Thanks for all the likes! Be sure to check out the new pen with geolocation based results!
//https://codepen.io/azureknight/pen/VYEBGZ
var $fastfood = ['In N Out', 'Mitsuwa', 'The Habit', 'Chipotle', 'Lil\' Pickle', 'Buffalo Wild Wings', 'Dominos', 'Haus of Pizza', 'Baja Fish', 'Chic Fil A', 'Flame Broiler', 'Jerry\'s Dogs', 'Jersey Mike\'s', 'Panera', 'Rooster Cafe', 'Corner Bakery', 'Laventinas', 'Bagelmania', 'Tommy\'s Pastrami', 'Costco'];

        var $fastRandom = Math.floor($fastfood.length * Math.random());

        var $randomFast = $fastfood[$fastRandom];

        var $restaurant = ['In N Out', 'Mitsuwa', 'The Habit', 'Chipotle', 'Souplantation', 'Baja Fish', 'Panera', 'Shinsengumi', 'Ajisen', 'Tokyo Table', 'Coco Ichibanya', 'IHOP', 'KBBQ', 'Pizza D\'Oro', 'Lucille\'s','Wahoo\'s', 'TGIF', 'Claim Jumper', 'Yardhouse', 'Mimis Cafe', 'Stonefire Grill', 'Anqi', 'California Pizza Kitchen', 'Acapulco', 'Haute Cakes'];

        var $restRandom = Math.floor($restaurant.length * Math.random());

        var $randomRest = $restaurant[$restRandom];

        var $dessert = ['Donuts', 'Frostbites', 'That Boba Place', 'Confetti', 'Yorgurtland', 'Alta', "Choco XO", 'Keane'];

        var $dessertRandom = Math.floor($dessert.length * Math.random());

        var $randomDest = $dessert[$dessertRandom];

        function reRoll(){

            $('#fastfood').text($fastfood[Math.floor($fastfood.length * Math.random())]);

            $('#restaurant').text($restaurant[Math.floor($restaurant.length * Math.random())]);

            $('#dessert').text($dessert[Math.floor($dessert.length * Math.random())]);
        }

        $(document).ready(function(){
            $('#fastfood').text($randomFast);
            $('#restaurant').text($randomRest);
            $('#dessert').text($randomDest);
        });