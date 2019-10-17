window.onload = function(){
    //Уровни
    let gotLevels = localStorage.getItem('gotLevels');
    let levels = ['Земля', 'Венера', 'Меркурий', 'Марс', 'Юпитер', 'Сатурн', 'Уран', 'Нептун', 'Плутон'];
    if(gotLevels) {
        gotLevels = JSON.parse(gotLevels);
        if(gotLevels.length !== levels.length){
            setLevels()
        }

    }else{
        setLevels()
    }
    function setLevels(){
        gotLevels = [];
        for(let i = 0; i < levels.length; i++){
            gotLevels.push([0, 0, 0, 0, 0]);
        }
    }
    //Деньги
    let money = setElement('money');
    //Урон
    let damage = setElement('damage');
    let dps = setElement('dps');
    function setElement(str){
        let st = localStorage.getItem(str);
        if(st && st !== "NaN") return Number(st);
        return str === 'damage' ? 1 : 0;
    }
    let newLevels = localStorage.getItem('newLevels');
    if(newLevels){
        newLevels = true;
    }else{
        newLevels = false;
    }
    //Оружие
    let allWeapons = [
        {damage: 1, dps: 0, cost: 10},
        {damage: 4, dps: 6, cost: 50},
        {damage: 10, dps: 10, cost: 150},
        {damage: 20, dps: 30, cost: 500},
        {damage: 50, dps: 80, cost: 2000},
        {damage: 150, dps: 200, cost: 5000},
        {damage: 20, dps: 350, cost: 5000},
        {damage: 500, dps: 500, cost: 20000},
        {damage: 1200, dps: 1500, cost: 55000},
        {damage: 300, dps: 3000, cost: 60000},
        {damage: 2000, dps: 4000, cost: 100000},
        {damage: 5000, dps: 8000, cost: 220000},
        {damage: 10000, dps: 17000, cost: 500000},
        {damage: 19000, dps: 30000, cost: 900000},
        {damage: 31000, dps: 42000, cost: 1600000},
        {damage: 64000, dps: 90000, cost: 3400000},
        {damage: 120000, dps: 170000, cost: 6500000},
        {damage: 0, dps: 450000, cost: 10000000},
        {damage: 300000, dps: 350000, cost: 33000000},
        {damage: 1000000, dps: 20000, cost: 70000000},
        {damage: 1200000, dps: 1200000, cost: 100000000},
        {damage: 2400000, dps: 3000000, cost: 250000000},
        {damage: 10000000, dps: 10000000, cost: 990000000},
        {damage: 15000000, dps: 20000000, cost: 1300000000},
        {damage: 23000000, dps: 36000000, cost: 1900000000},
        {damage: 40000000, dps: 66000000, cost: 3500000000},
        {damage: 80000000, dps: 120000000, cost: 5000000000},
        {damage: 140000000, dps: 370000000, cost: 15000000000},
        {damage: 880000000, dps: 1300000000, cost: 50000000000},
        {damage: 7100000000, dps: 9200000000, cost: 250000000000},
        {damage: 35000000000, dps: 55000000000, cost: 1000000000000},
        {damage: 45000000000000, dps: 65000000000000, cost: 100000000000000},
        {damage: 5500000000000000, dps: 7500000000000000, cost: 1000000000000000},
        {damage: 75000000000000000000, dps: 95000000000000000000, cost: 100000000000000000},
        {damage: 95000000000000000000000, dps: 10000000000000000000000, cost: 10000000000000000000},
    ];
    let weapons = localStorage.getItem('weapons');
    if(weapons) {
        weapons = JSON.parse(weapons);
        if(weapons.length !== allWeapons.length){
            for(let i = 0; i < allWeapons.length - weapons.length; i++){
                weapons.push(0);
            }
        }
    }
    else{
        setWeapons();
    }
    function setWeapons(){
        weapons = [];
        for(let i = 0; i < allWeapons.length; i++){
            weapons.push(0);
        }
    }
    //Реклама
    let showAdv;
    const MONSTERS = [
        [
            {health: 5, money: 1},
            {health: 30, money: 4},
            {health: 150, money: 15},
            {health: 500, money: 50},
            {health: 2000, money: 150},
        ],
        [
            {health: 2500, money: 200},
            {health: 5000, money: 400},
            {health: 15000, money: 1000},
            {health: 30000, money: 2500},
            {health: 100000, money: 6000},
        ],
        [
            {health: 120000, money: 7000},
            {health: 200000, money: 12000},
            {health: 300000, money: 19000},
            {health: 500000, money: 29000},
            {health: 1000000, money: 65000},
        ],
        [
            {health: 1000000, money: 70000},
            {health: 1500000, money: 120000},
            {health: 2500000, money: 190000},
            {health: 5000000, money: 300000},
            {health: 10000000, money: 500000},
        ],
        [
            {health: 20000000, money: 1000000},
            {health: 42000000, money: 2000000},
            {health: 100000000, money: 4000000},
            {health: 290000000, money: 10000000},
            {health: 850000000, money: 22000000},
        ],
        [
            {health: 1000000000, money: 25000000},
            {health: 1300000000, money: 32000000},
            {health: 2000000000, money: 40000000},
            {health: 4200000000, money: 78000000},
            {health: 7500000000, money: 100000000},
        ],
        [
            {health: 12500000000, money: 125000000},
            {health: 20000000000, money: 190000000},
            {health: 33000000000, money: 330000000},
            {health: 50000000000, money: 520000000},
            {health: 100000000000, money: 990000000},
        ],
        [
            {health: 110000000000, money: 1000000000},
            {health: 222000000000, money: 2220000000},
            {health: 444000000000, money: 4440000000},
            {health: 666000000000, money: 6660000000},
            {health: 888000000000, money: 8880000000},
        ],
        [
            {health: 1000000000000, money: 12000000000},
            {health: 2000000000000, money: 19000000000},
            {health: 3200000000000, money: 29000000000},
            {health: 8700000000000, money: 48000000000},
            {health: 25000000000000, money: 250000000000},
        ]
    ];
    //Предзагрузка изображений
    let imgsArray = ["images/clover.svg","images/coin.svg","images/earth.svg","images/explosion.svg","images/galaxy.png","images/jupiter.svg","images/left-arrow.svg","images/mars.svg","images/menu.svg","images/mercury.svg","images/mtr-0-0.svg","images/mtr-0-1.svg","images/mtr-0-2.svg","images/mtr-0-3.svg","images/mtr-0-4.svg","images/mtr-1-0.svg","images/mtr-1-1.svg","images/mtr-1-2.svg","images/mtr-1-3.svg","images/mtr-1-4.svg","images/mtr-2-0.svg","images/mtr-2-1.svg","images/mtr-2-2.svg","images/mtr-2-3.svg","images/mtr-2-4.svg","images/mtr-3-0.svg","images/mtr-3-1.svg","images/mtr-3-2.svg","images/mtr-3-3.svg","images/mtr-3-4.svg","images/mtr-4-0.svg","images/mtr-4-1.svg","images/mtr-4-2.svg","images/mtr-4-3.svg","images/mtr-4-4.svg","images/mtr-5-0.svg","images/mtr-5-1.svg","images/mtr-5-2.svg","images/mtr-5-3.svg","images/mtr-5-4.svg","images/mtr-6-0.svg","images/mtr-6-1.svg","images/mtr-6-2.svg","images/mtr-6-3.svg","images/mtr-6-4.svg","images/mtr-7-0.svg","images/mtr-7-1.svg","images/mtr-7-2.svg","images/mtr-7-3.svg","images/mtr-7-4.svg","images/mtr-8-0.svg","images/mtr-8-1.svg","images/mtr-8-2.svg","images/mtr-8-3.svg","images/mtr-8-4.svg","images/neptune.svg","images/pluto.svg","images/saturn.svg","images/skull.svg","images/uranus.svg","images/venus.svg","images/wp0.svg","images/wp1.svg","images/wp10.svg","images/wp11.svg","images/wp12.svg","images/wp13.svg","images/wp14.svg","images/wp15.svg","images/wp16.svg","images/wp17.svg","images/wp18.svg","images/wp19.svg","images/wp2.svg","images/wp20.svg","images/wp21.svg","images/wp22.svg","images/wp23.svg","images/wp24.svg","images/wp25.svg","images/wp26.svg","images/wp27.svg","images/wp3.svg","images/wp4.svg","images/wp5.svg","images/wp6.svg","images/wp7.svg","images/wp8.svg","images/wp9.svg", "images/wp28.svg","images/wp29.svg","images/wp30.svg", "images/wp31.svg","images/wp32.svg","images/wp33.svg","images/wp34.svg", "images/left-arrow2.svg"];
    try{
        for(let i = 0; i < imgsArray.length; i++){
            new Image().src= imgsArray[i];
        }
    }catch(ignored){}
    const game = new Vue({
        el: '.game',
        data: {
            damage: damage,
            dps: dps,
            blackout: false,
            content: false,
            rotateContent: false,
            showLevels: true,
            levels: levels,
            gotLevels: gotLevels,
            lvl: 0,
            monster: 0,
            timer: false,
            time: 30,
            timeout: false,
            intervalTimer: 0,
            allWeapons: allWeapons,
            myWeapons: weapons,
            money: money,
            hp: 10,
            allHp: 10,
            clover: false,
            planetsImgs: ['earth', 'venus', 'mercury', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'],
            animShowMonster: false,
            animKillMonster: false,
            interval : 0,
            killInterval: 0,
            reset: false,
            advTime: false,
            isAdvShow: false,
            increaseDamage: 1,
            newLevels: newLevels
        },
        computed: {
            planetImg(){
                return this.getLevelPlanet(this.lvl);
            }
        },
        components: {

        },
        methods: {
            startLevel(levelNum){
                this.reset = false;
                if(!this.canUsePlanet(levelNum)) return;
                this.rotateContent = false;
                this.showLevels = false;
                this.content = true;
                this.lvl = levelNum;
                this.getMonster();
            },
            canUsePlanet(index){
                return index === 0 || this.gotLevels[index - 1][4] >= 1;
            },
            getLevelPlanet(lvl){
                return 'url(images/' + this.planetsImgs[lvl] + '.svg) center center no-repeat / 100%';
            },
            getPercent(cost, lvl){
                if(lvl === 0) return cost;
                return Math.ceil(cost * Math.pow(1.1, lvl));
            },
            startTimer(){
                clearInterval(this.intervalTimer);
                this.timer = true;
                this.time = 30;
                this.intervalTimer = setInterval(()=>{
                    this.time -= 1;
                    if(this.time === 0){
                        this.setBoss();
                    }
                }, 1000);

            },
            clickMonster(e){
                setExplosion(e);
                this.hitMonster(this.damage * this.increaseDamage);
            },
            hitMonster(hp) {
                if(this.hp <= 0) return;
                if(hp >= this.hp){
                    this.hp = 0;
                }else{
                    this.hp -= hp;
                }
                if(this.hp === 0){
                    this.killMonster();
                }
            },
            getNormalNumber(num){
                let count = ["", "k", "M", "B", "T", 'K', 'U', 'S', 'E', 'O', 'N', 'D'];
                let i = 0;
                while (num >= 1000) {
                    num /= 1000;
                    i++;
                }
                num = num.toFixed(1);
                num = num[num.length-1] === '0' ? num.substr(0, num.length-2) : num;
                return num + count[i];
            },
            startDPS(){
                clearInterval(this.interval);
                this.interval = setInterval( ()=>{
                  this.hitMonster(this.dps * this.increaseDamage);
              }, 1000)
            },
            killMonster(){
                this.animKillMonster = true;
                this.gotLevels[this.lvl].splice(this.monster, 1, this.gotLevels[this.lvl][this.monster] + 1);
                this.killInterval = setTimeout(()=>{
                    this.animKillMonster = false;
                    if(this.monster === 4){
                        this.setBoss();
                    }else{
                        this.getSameMonster();
                    }
                }, 300);
                this.flyClover();
                //Финальный босс
                if(this.lvl === 8 && this.monster === 4){
                    if(!this.newLevels){
                        setTimeout(()=>{
                            this.newLevels = true;
                            localStorage.setItem('newLevels', 'true');
                            setLevels();
                            localStorage.setItem('gotLevels', JSON.stringify(gotLevels));
                            this.gotLevels = gotLevels;
                            this.returnMenu();
                        }, 1000);
                    }
                }
            },
            clearAllTimes(){
                clearInterval(this.interval);
                clearInterval(this.intervalTimer);
            },
            changeMonsterLeft(){
                if(showAdv && this.advTime){
                    showAdv(false);
                }
                if(this.monster === 0){
                    if(this.lvl === 0) return;
                    this.lvl--;
                    this.setBoss();
                }else{
                    this.setMonster(this.monster - 1);
                }
            },
            changeMonsterRight(){
                if(showAdv && this.advTime){
                    showAdv(false);
                }
                if(this.monster === 4){
                    if (this.planetsImgs[this.lvl + 1]){
                        this.lvl++;
                        this.setMonster(0);
                    }
                    return;
                }
                //Включаем босса
                if(this.monster === 3){
                    this.setBoss();
                }else if(this.gotLevels[this.lvl][this.monster]>=10){
                    this.setMonster(this.monster + 1);
                }
            },
            improveWeapon(index){
                let cost = this.getPercent(allWeapons[index].cost, this.myWeapons[index]);
                if(this.money >= cost){
                    this.giveMoney(cost);
                    this.myWeapons.splice(index, 1, 1 + this.myWeapons[index]);
                    this.damage += this.allWeapons[index].damage;
                    this.dps += this.allWeapons[index].dps;
                }
            },
            giveMoney(price){
                this.money -= price;
            },
            getMonster(){
                let gotLevels = this.gotLevels[this.lvl];
                let monsterLvl = 4;
                //Если какой-то уровень не пройден, ставим этого монстра
                //Если пройдены все - последнего
                for(let i = 0; i < gotLevels.length; i++){
                    if(gotLevels[i] < 10){
                        monsterLvl = i;
                        break;
                    }
                }
                if(monsterLvl === 4){
                    this.setBoss();
                }else{
                    this.setMonster(monsterLvl);
                }

            },
            getSameMonster(){
                this.setMonsterHP();
                this.animateMonster();
            },
            setMonster(monsterLvl){
                this.timer = false;
                clearInterval(this.intervalTimer);
                this.startDPS();
                this.monster = monsterLvl;
                this.setMonsterImg();
                this.animateMonster();
                this.setMonsterHP();
            },
            setBoss(){
                this.startDPS();
              this.setMonster(4);
              this.startTimer();
            },
            animateMonster(){
              this.animShowMonster = true;
              setTimeout(()=>{
                  this.animShowMonster = false;
              }, 200);
            },
            getMoney(money){
                this.money += money;
            },
            flyClover(){
                let content = document.querySelector('.content');
                let img = document.createElement('img');
                let txt = document.createElement('div');
                let explosion = document.querySelector('.explosion');
                if(explosion){
                    img.style.left = explosion.style.left;
                    img.style.top = explosion.style.top;
                    txt.style.left = getNumWithoutPx(explosion.style.left) - 32 + 'px';
                    txt.style.top = getNumWithoutPx(explosion.style.top) - 32 + 'px';
                }else{
                    img.style.left = '50%';
                    img.style.top = '50%';
                    txt.style.left = '50%';
                    txt.style.top = '50%';
                }
                let coef = 1;
                if(this.newLevels){
                    coef = 25000000000;
                }
                let money = MONSTERS[this.lvl][this.monster].money * coef;
                txt.innerText = '+' + this.getNormalNumber(money);
                img.classList.add('clover');
                txt.classList.add('cloverMoney');
                img.src = "images/clover.svg";
                content.appendChild(img);
                content.appendChild(txt);
                setTimeout(()=>{
                    img.remove();
                    txt.remove();
                    this.getMoney(money);
                }, 600)
            },
            setMonsterImg(){
                let monsterBlock = document.querySelector('.monster');
                monsterBlock.style.background = "url(" + 'images/mtr-' + this.lvl + '-' + this.monster + '.svg'
                    + ") center center no-repeat / 100%";
            },
            setMonsterHP(){
                let coef = 1;
                if(this.newLevels){
                    coef = 500000000000;
                }
                this.hp = MONSTERS[this.lvl][this.monster].health * coef;
                this.allHp = this.hp;
            },
            returnMenu(){
                this.reset = false;
                this.rotateContent = true;
                setTimeout(()=>{
                    this.clearAllTimes();
                    this.content = false;
                    this.showLevels = true;
                    this.rotateContent = false;
                }, 720);
            },
            resetProgr(){
                this.blackout = !this.blackout;
                this.reset = !this.reset;
            },
            resetCertain(){
                this.blackout = !this.blackout;
                this.reset = !this.reset;
                setLevels();
                setWeapons();
                this.gotLevels = gotLevels;
                this.myWeapons = weapons;
                this.damage = 1;
                this.dps = 0;
                this.money = 0;
                this.newLevels = false;
                this.returnMenu();
                 localStorage.setItem('gotLevels', JSON.stringify(gotLevels));
               localStorage.setItem('money', '0');
                 localStorage.setItem('damage', '1');
                 localStorage.setItem('dps', '0');
                localStorage.setItem('weapons', JSON.stringify(weapons));
                localStorage.removeItem('newLevels');
            },
            removeBlackout(){
                this.blackout = false;
                this.reset = false;
                this.isAdvShow = false;
            },
            showAdv(){
                if(showAdv && this.advTime){
                    showAdv(true);
                }
            },
            showTrueAdv(){
                this.blackout = true;
               this.isAdvShow = true;
            },
            okAdv(){
                this.isAdvShow = false;
                this.blackout = false;
            },
            setAdvEffect(){
                this.increaseDamage = 1.5;
            },
            deleteAdvEffect(){
                this.increaseDamage = 1;
            },
            switchWeaponRight(){
                let a = document.querySelector('.weapons');
                a.scrollTo(a.scrollLeft + 370, 0)
            },
            switchWeaponLeft(){
                let a = document.querySelector('.weapons');
                a.scrollTo(a.scrollLeft - 370, 0)
            }
        },
        mounted: function() {
            this.$nextTick(function() {
                document.querySelector(".start").remove();
                document.querySelector(".game").classList.remove('none')
            })
        }
    });
    function getNumWithoutPx(str){
        return Number(str.substr(0, str.indexOf('px')));
    }
//Эффект клика на монстра
    let monsterBlock = document.querySelector('.monster');
    function setExplosion(e) {
        if(e.preventDefault) e.preventDefault();

        if(e.clientX === 0) return;
        //Эффект удара
        let x = e.clientX - 16;
        let y = e.clientY - 16;
        let explosion = document.createElement('div');
        explosion.classList.add('explosion');
        explosion.style.left = x + 'px';
        explosion.style.top = y + 'px';
        document.body.appendChild(explosion);
        explosion.onclick = function(){
            monsterBlock.click();
            monsterBlock.classList.add('monsterActive');
            setTimeout(()=>{
                monsterBlock.classList.remove('monsterActive');
            }, 100);
            setExplosion(e);
        };
        setTimeout(()=>{
            explosion.remove();
        }, 500)
    }
    if(window.YaGames){
        YaGames.init({
            adv: {
                onAdvClose: wasShown => {
                    if(!wasShown) {
                        game.deleteAdvEffect();
                        game.advTime = true;
                    }
                }
            }
        }).then(ysdk => {
            showAdv = (adv) => {
                ysdk.adv.showFullscreenAdv({
                    callbacks: {
                        onClose: function() {
                            game.advTime = false;
                            if(adv){
                                game.showTrueAdv();
                                game.setAdvEffect();
                            }
                            setTimeout(()=>{
                                game.advTime = true;
                                if(adv){
                                    game.deleteAdvEffect()
                                }
                            }, 240000);
                        }
                    }
                });
            };
        });
    }
    if(navigator.onLine){
        game.advTime = true;
    }
    else{
        game.advTime = false;
    }

    //Сохранение прогресса
    window.onblur = saveProgress;
    window.onbeforeunload = saveProgress;
    window.onpagehide = saveProgress;

    function saveProgress(){
        if(game.gotLevels) localStorage.setItem('gotLevels', JSON.stringify(game.gotLevels));
        if(game.money) localStorage.setItem('money', game.money);
        if(game.damage) localStorage.setItem('damage', game.damage);
        if(game.dps) localStorage.setItem('dps', game.dps);
        if(game.myWeapons) localStorage.setItem('weapons', JSON.stringify(game.myWeapons));
    }
};