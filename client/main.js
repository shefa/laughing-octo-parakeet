import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
    var p = parseInt(Math.random()*data.provinces.length);
    var m = parseInt(Math.random()*data.provinces[p].municipalities.length);
    this.province = new ReactiveVar(p);
    this.municipality = new ReactiveVar(m);
    this.guessed = new ReactiveVar(false);
    this.hint = new ReactiveVar(false);
    this.alone = new ReactiveVar(false);
    this.fail = new ReactiveVar(false);
});

Template.hello.onRendered(function helloOnRendered() {
    Meteor.test =  { data:data };
    $('#search-select').dropdown();
});

Template.hello.helpers({
    province() {
        return data.provinces[Template.instance().province.get()];
    },
    municipality() {
        return data.provinces[Template.instance().province.get()].municipalities[Template.instance().municipality.get()];
    },
    guessed() {
        return Template.instance().guessed.get();
    },
    hinted() {
        return (Template.instance().hint.get() || Template.instance().guessed.get());
    },
    alone() {
        return Template.instance().alone.get();
    },
    municipalitiesCount() {
        return data.provinces[Template.instance().province.get()].municipalities.length;
    },
    fail() {
        return Template.instance().fail.get();
    }
});

Template.hello.events({
    'click .new'(event, instance) {
        var p = parseInt(Math.random()*data.provinces.length);
        var m = parseInt(Math.random()*data.provinces[p].municipalities.length);
        instance.province.set(p);
        instance.municipality.set(m);
        instance.guessed.set(false);
        instance.hint.set(false);
        instance.alone.set(false);
        instance.fail.set(false);
        $("#search-select").dropdown('restore defaults');
    },
    'click .guess'(event, instance) {
        if(parseInt($("#search-select").val())===instance.province.get()) 
        {
            instance.guessed.set(true);
            instance.alone.set(true);
            instance.fail.set(false);
        }
        else instance.fail.set(true);
    },
    'click .hint'(event, instance) {
        instance.hint.set(true);
    },
    'click .show'(event, instance) {
        instance.guessed.set(true);
    }
});


title= "Област/Община;Площ km2;Население 1.2.2011;Градове;Села"
data = {
    provinces: [
        { name: "Област Благоевград", area:"6 449,571", population: "323 552", cities: 13, villages: 261, municipalities: [
            { name: "Община Банско", area:"475,881", population: "13 125", cities: 2, villages: 6 },
            { name: "Община Белица", area:"227,477", population: "9 927", cities: 1, villages: 11 },
            { name: "Община Благоевград", area:"620,118", population: "77 441", cities: 1, villages: 25 },
            { name: "Община Гоце Делчев", area:"330,210", population: "31 236", cities: 1, villages: 11 },
            { name: "Община Гърмен", area:"388,479", population: "14 981", cities: 0, villages: 16 },
            { name: "Община Кресна", area:"344,549", population: "5 441", cities: 1, villages: 6 },
            { name: "Община Петрич", area:"650,132", population: "54 006", cities: 1, villages: 54 },
            { name: "Община Разлог", area:"506,470", population: "20 598", cities: 1, villages: 7 },
            { name: "Община Сандански", area:"998,416", population: "40 470", cities: 2, villages: 52 },
            { name: "Община Сатовча", area:"332,591", population: "15 444", cities: 0, villages: 14 },
            { name: "Община Симитли", area:"553,004", population: "14 283", cities: 1, villages: 17 },
            { name: "Община Струмяни", area:"355,190", population: "5 778", cities: 0, villages: 21 },
            { name: "Община Хаджидимово", area:"327,778", population: "10 091", cities: 1, villages: 14 },
            { name: "Община Якоруда", area:"339,276", population: "10 731", cities: 1, villages: 7 }
        ] },
        { name: "Област Бургас", area:"7 748,070", population: "415 817", cities: 18, villages: 232, municipalities: [
            { name: "Община Айтос", area:"402,866", population: "28 687", cities: 1, villages: 16 },
            { name: "Община Бургас", area:"559,151", population: "212 902", cities: 2, villages: 10 },
            { name: "Община Камено", area:"354,946", population: "10 393", cities: 1, villages: 12 },
            { name: "Община Карнобат", area:"835,468", population: "25 477", cities: 1, villages: 30 },
            { name: "Община Малко Търново", area:"783,672", population: "3 793", cities: 1, villages: 12 },
            { name: "Община Несебър", area:"420,433", population: "22 348", cities: 3, villages: 11 },
            { name: "Община Поморие", area:"413,189", population: "27 658", cities: 2, villages: 15 },
            { name: "Община Приморско", area:"350,084", population: "6 064", cities: 2, villages: 4 },
            { name: "Община Руен", area:"689,937", population: "29 101", cities: 0, villages: 41 },
            { name: "Община Созопол", area:"480,067", population: "12 610", cities: 1, villages: 11 },
            { name: "Община Средец", area:"1149,878", population: "14 934", cities: 1, villages: 32 },
            { name: "Община Сунгурларе", area:"794,967", population: "12 559", cities: 1, villages: 27 },
            { name: "Община Царево", area:"513,402", population: "9 291", cities: 2, villages: 11 }
        ] },
        { name: "Област Варна", area:"3 827,428", population: "475 074", cities: 11, villages: 148, municipalities: [
            { name: "Община Аврен", area:"353,776", population: "8 574", cities: 0, villages: 17 },
            { name: "Община Аксаково", area:"460,536", population: "20 426", cities: 2, villages: 21 },
            { name: "Община Белослав", area:"60,079", population: "11 023", cities: 1, villages: 3 },
            { name: "Община Бяла", area:"161,842", population: "3 242", cities: 1, villages: 5 },
            { name: "Община Варна", area:"238,495", population: "343 704", cities: 1, villages: 5 },
            { name: "Община Ветрино", area:"292,333", population: "5 415", cities: 0, villages: 10 },
            { name: "Община Вълчи дол", area:"472,518", population: "10 052", cities: 1, villages: 21 },
            { name: "Община Девня", area:"121,052", population: "8 730", cities: 1, villages: 2 },
            { name: "Община Долни чифлик", area:"489,093", population: "19 360", cities: 1, villages: 16 },
            { name: "Община Дългопол", area:"440,945", population: "14 389", cities: 1, villages: 16 },
            { name: "Община Провадия", area:"520,882", population: "22 934", cities: 1, villages: 24 },
            { name: "Община Суворово", area:"215,877", population: "7 225", cities: 1, villages: 8 }
        ] },
        { name: "Област Велико Търново", area:"4 661,572", population: "258 494", cities: 14, villages: 322, municipalities: [
            { name: "Община Велико Търново", area:"885,345", population: "88 670", cities: 3, villages: 86 },
            { name: "Община Горна Оряховица", area:"317,807", population: "46 685", cities: 2, villages: 12 },
            { name: "Община Елена", area:"671,389", population: "9 434", cities: 1, villages: 123 },
            { name: "Община Златарица", area:"232,676", population: "3 991", cities: 1, villages: 23 },
            { name: "Община Лясковец", area:"177,373", population: "13 397", cities: 1, villages: 5 },
            { name: "Община Павликени", area:"622,690", population: "23 869", cities: 2, villages: 18 },
            { name: "Община Полски Тръмбеш", area:"463,652", population: "14 451", cities: 1, villages: 14 },
            { name: "Община Свищов", area:"625,321", population: "42 734", cities: 1, villages: 15 },
            { name: "Община Стражица", area:"508,297", population: "12 721", cities: 1, villages: 21 },
            { name: "Община Сухиндол", area:"157,022", population: "2 542", cities: 1, villages: 5 }
        ] },
        { name: "Област Видин", area:"3 054,405", population: "101 018", cities: 7, villages: 133, municipalities: [
            { name: "Община Белоградчик", area:"410,665", population: "6 602", cities: 1, villages: 17 },
            { name: "Община Бойница", area:"187,361", population: "1 341", cities: 0, villages: 8 },
            { name: "Община Брегово", area:"179,223", population: "5 514", cities: 1, villages: 9 },
            { name: "Община Видин", area:"512,932", population: "63 257", cities: 2, villages: 32 },
            { name: "Община Грамада", area:"184,213", population: "2 007", cities: 1, villages: 7 },
            { name: "Община Димово", area:"402,493", population: "6 514", cities: 1, villages: 22 },
            { name: "Община Кула", area:"279,370", population: "4 717", cities: 1, villages: 8 },
            { name: "Община Макреш", area:"228,790", population: "1 630", cities: 0, villages: 7 },
            { name: "Община Ново село", area:"109,487", population: "2 979", cities: 0, villages: 5 },
            { name: "Община Ружинци", area:"232,555", population: "4 374", cities: 0, villages: 10 },
            { name: "Община Чупрене", area:"327,316", population: "2 083", cities: 0, villages: 8 }
        ] },
        { name: "Област Враца", area:"3 618,769", population: "186 848", cities: 8, villages: 114, municipalities: [
            { name: "Община Борован", area:"210,729", population: "5 714", cities: 0, villages: 5 },
            { name: "Община Бяла Слатина", area:"545,510", population: "24 606", cities: 1, villages: 14 },
            { name: "Община Враца", area:"706,236", population: "73 894", cities: 1, villages: 21 },
            { name: "Община Козлодуй", area:"284,874", population: "21 180", cities: 1, villages: 4 },
            { name: "Община Криводол", area:"325,857", population: "9 390", cities: 1, villages: 14 },
            { name: "Община Мездра", area:"519,112", population: "21 748", cities: 1, villages: 27 },
            { name: "Община Мизия", area:"209,309", population: "7 570", cities: 1, villages: 5 },
            { name: "Община Оряхово", area:"326,549", population: "11 522", cities: 1, villages: 6 },
            { name: "Община Роман", area:"301,524", population: "6 223", cities: 1, villages: 12 },
            { name: "Община Хайредин", area:"189,069", population: "5 001", cities: 0, villages: 6 }
        ] },
        { name: "Област Габрово", area:"2 026,005", population: "122 702", cities: 5, villages: 344, municipalities: [
            { name: "Община Габрово", area:"555,579", population: "65 268", cities: 1, villages: 133 },
            { name: "Община Дряново", area:"274,162", population: "9 685", cities: 1, villages: 62 },
            { name: "Община Севлиево", area:"941,355", population: "35 995", cities: 1, villages: 45 },
            { name: "Община Трявна", area:"254,909", population: "11 754", cities: 2, villages: 104 }
        ] },
        { name: "Област Добрич", area:"4 719,713", population: "189 677", cities: 6, villages: 209, municipalities: [
            { name: "Община Балчик", area:"524,153", population: "20 317", cities: 1, villages: 21 },
            { name: "Община Генерал Тошево", area:"982,238", population: "15 097", cities: 1, villages: 41 },
            { name: "Община Добрич", area:"109,018", population: "91 030", cities: 1, villages: 0 },
            { name: "Община Добрич0селска", area:"1296,163", population: "22 081", cities: 0, villages: 68 },
            { name: "Община Каварна", area:"481,367", population: "15 358", cities: 1, villages: 20 },
            { name: "Община Крушари", area:"417,458", population: "4 547", cities: 0, villages: 19 },
            { name: "Община Тервел", area:"579,677", population: "16 178", cities: 1, villages: 25 },
            { name: "Община Шабла", area:"329,639", population: "5 069", cities: 1, villages: 15 }
        ] },
        { name: "Област Кърджали", area:"3 210,552", population: "152 808", cities: 5, villages: 463, municipalities: [
            { name: "Община Ардино", area:"338,848", population: "11 572", cities: 1, villages: 51 },
            { name: "Община Джебел", area:"229,079", population: "8 167", cities: 1, villages: 46 },
            { name: "Община Кирково", area:"537,871", population: "21 916", cities: 0, villages: 72 },
            { name: "Община Крумовград", area:"843,319", population: "17 823", cities: 1, villages: 79 },
            { name: "Община Кърджали", area:"574,742", population: "67 460", cities: 1, villages: 117 },
            { name: "Община Момчилград", area:"358,124", population: "16 263", cities: 1, villages: 48 },
            { name: "Община Черноочене", area:"328,569", population: "9 607", cities: 0, villages: 50 }
        ] },
        { name: "Област Кюстендил", area:"3 072,007", population: "136 686", cities: 7, villages: 175, municipalities: [
            { name: "Община Бобов дол", area:"206,188", population: "9 067", cities: 1, villages: 17 },
            { name: "Община Бобошево", area:"135,142", population: "2 870", cities: 1, villages: 11 },
            { name: "Община Дупница", area:"329,059", population: "44 988", cities: 1, villages: 16 },
            { name: "Община Кочериново", area:"182,306", population: "5 214", cities: 1, villages: 10 },
            { name: "Община Кюстендил", area:"979,915", population: "60 681", cities: 1, villages: 71 },
            { name: "Община Невестино", area:"439,686", population: "2 821", cities: 0, villages: 23 },
            { name: "Община Рила", area:"360,960", population: "2 888", cities: 1, villages: 4 },
            { name: "Община Сапарева баня", area:"180,921", population: "7 528", cities: 1, villages: 4 },
            { name: "Община Трекляно", area:"257,830", population: "629", cities: 0, villages: 19 }
        ] },
        { name: "Област Ловеч", area:"4 128,764", population: "141 422", cities: 8, villages: 102, municipalities: [
            { name: "Община Априлци", area:"238,256", population: "3 338", cities: 1, villages: 3 },
            { name: "Община Летница", area:"177,719", population: "3 776", cities: 1, villages: 3 },
            { name: "Община Ловеч", area:"946,284", population: "49 738", cities: 1, villages: 34 },
            { name: "Община Луковит", area:"453,408", population: "18 125", cities: 1, villages: 11 },
            { name: "Община Тетевен", area:"697,161", population: "21 307", cities: 1, villages: 12 },
            { name: "Община Троян", area:"888,839", population: "32 399", cities: 1, villages: 21 },
            { name: "Община Угърчин", area:"523,103", population: "6 505", cities: 1, villages: 10 },
            { name: "Община Ябланица", area:"203,994", population: "6 234", cities: 1, villages: 8 }
        ] },
        { name: "Област Монтана", area:"3 634,237", population: "148 098", cities: 8, villages: 122, municipalities: [
            { name: "Община Берковица", area:"463,705", population: "18 803", cities: 1, villages: 19 },
            { name: "Община Бойчиновци", area:"308,334", population: "9 272", cities: 1, villages: 12 },
            { name: "Община Брусарци", area:"194,434", population: "5 078", cities: 1, villages: 9 },
            { name: "Община Вълчедръм", area:"431,514", population: "9 900", cities: 1, villages: 10 },
            { name: "Община Вършец", area:"240,112", population: "8 203", cities: 1, villages: 9 },
            { name: "Община Георги Дамяново", area:"297,594", population: "2 771", cities: 0, villages: 13 },
            { name: "Община Лом", area:"323,882", population: "28 139", cities: 1, villages: 9 },
            { name: "Община Медковец", area:"191,089", population: "4 029", cities: 0, villages: 5 },
            { name: "Община Монтана", area:"675,715", population: "53 856", cities: 1, villages: 23 },
            { name: "Община Чипровци", area:"286,881", population: "3 715", cities: 1, villages: 9 },
            { name: "Община Якимово", area:"220,977", population: "4 332", cities: 0, villages: 4 }
        ] },
        { name: "Област Пазарджик", area:"4 479,907", population: "275 548", cities: 13, villages: 104, municipalities: [
            { name: "Община Батак", area:"677,310", population: "6 144", cities: 1, villages: 2 },
            { name: "Община Белово", area:"346,356", population: "8 891", cities: 1, villages: 7 },
            { name: "Община Брацигово", area:"229,425", population: "9 648", cities: 1, villages: 6 },
            { name: "Община Велинград", area:"604,471", population: "35 757", cities: 1, villages: 20 },
            { name: "Община Лесичово", area:"209,430", population: "5 408", cities: 0, villages: 7 },
            { name: "Община Пазарджик", area:"636,722", population: "114 817", cities: 1, villages: 31 },
            { name: "Община Панагюрище", area:"598,913", population: "25 263", cities: 1, villages: 9 },
            { name: "Община Пещера", area:"158,418", population: "18 899", cities: 1, villages: 2 },
            { name: "Община Ракитово", area:"246,438", population: "15 064", cities: 2, villages: 1 },
            { name: "Община Септември", area:"349,372", population: "25 794", cities: 2, villages: 13 },
            { name: "Община Стрелча", area:"224,460", population: "4 913", cities: 1, villages: 4 },
            { name: "Община Сърница", area:"198,592", population: "4 950", cities: 1, villages: 2 }
        ] },
        { name: "Област Перник", area:"3 394,221", population: "133 530", cities: 6, villages: 165, municipalities: [
            { name: "Община Брезник", area:"404,038", population: "6 945", cities: 1, villages: 34 },
            { name: "Община Земен", area:"247,077", population: "2 762", cities: 1, villages: 17 },
            { name: "Община Ковачевци", area:"144,945", population: "1 600", cities: 0, villages: 10 },
            { name: "Община Перник", area:"484,213", population: "97 181", cities: 2, villages: 22 },
            { name: "Община Радомир", area:"540,488", population: "20 896", cities: 1, villages: 31 },
            { name: "Община Трън", area:"573,460", population: "4 146", cities: 1, villages: 51 }
        ] },
        { name: "Област Плевен", area:"4 653,324", population: "269 752", cities: 14, villages: 109, municipalities: [
            { name: "Община Белене", area:"285,046", population: "10 318", cities: 1, villages: 5 },
            { name: "Община Гулянци", area:"459,201", population: "12 336", cities: 1, villages: 11 },
            { name: "Община Долна Митрополия", area:"674,897", population: "20 064", cities: 2, villages: 14 },
            { name: "Община Долни Дъбник", area:"307,569", population: "11 670", cities: 1, villages: 6 },
            { name: "Община Искър", area:"243,899", population: "6 884", cities: 1, villages: 3 },
            { name: "Община Кнежа", area:"317,812", population: "13 803", cities: 1, villages: 3 },
            { name: "Община Левски", area:"414,692", population: "19 938", cities: 1, villages: 12 },
            { name: "Община Никопол", area:"416,582", population: "9 305", cities: 1, villages: 13 },
            { name: "Община Плевен", area:"809,712", population: "131 152", cities: 2, villages: 23 },
            { name: "Община Пордим", area:"238,132", population: "6 426", cities: 1, villages: 7 },
            { name: "Община Червен бряг", area:"485,782", population: "27 856", cities: 2, villages: 12 }
        ] },
        { name: "Област Пловдив", area:"5 993,524", population: "683 027", cities: 18, villages: 194, municipalities: [
            { name: "Община Асеновград", area:"665,391", population: "64 034", cities: 1, villages: 28 },
            { name: "Община Брезово", area:"465,405", population: "7 298", cities: 1, villages: 15 },
            { name: "Община Калояново", area:"347,452", population: "11 879", cities: 0, villages: 15 },
            { name: "Община Карлово", area:"1 059,182", population: "42 480", cities: 4, villages: 23 },
            { name: "Община Кричим", area:"54,895", population: "8 409", cities: 1, villages: 0 },
            { name: "Община Куклен", area:"148,375", population: "6 431", cities: 1, villages: 5 },
            { name: "Община Лъки", area:"292,511", population: "2 902", cities: 1, villages: 10 },
            { name: "Община Марица", area:"342,657", population: "32 438", cities: 0, villages: 19 },
            { name: "Община Перущица", area:"48,719", population: "5 058", cities: 1, villages: 0 },
            { name: "Община Пловдив", area:"101,981", population: "338 153", cities: 1, villages: 0 },
            { name: "Община Първомай", area:"521,590", population: "25 883", cities: 1, villages: 16 },
            { name: "Община Раковски", area:"263,963", population: "26 381", cities: 1, villages: 6 },
            { name: "Община Родопи", area:"523,729", population: "26 171", cities: 0, villages: 21 },
            { name: "Община Садово", area:"192,859", population: "15 604", cities: 1, villages: 11 },
            { name: "Община Сопот", area:"56,003", population: "9 827", cities: 1, villages: 1 },
            { name: "Община Стамболийски", area:"61,270", population: "20 771", cities: 1, villages: 4 },
            { name: "Община Съединение", area:"297,992", population: "10 450", cities: 1, villages: 9 },
            { name: "Община Хисаря", area:"549,550", population: "12 600", cities: 1, villages: 11 }
        ] },
        { name: "Област Разград", area:"2 430,661", population: "125 190", cities: 6, villages: 97, municipalities: [
            { name: "Община Завет", area:"273,872", population: "10 586", cities: 1, villages: 6 },
            { name: "Община Исперих", area:"402,244", population: "22 692", cities: 1, villages: 23 },
            { name: "Община Кубрат", area:"439,934", population: "18 355", cities: 1, villages: 16 },
            { name: "Община Лозница", area:"240,613", population: "9 265", cities: 1, villages: 15 },
            { name: "Община Разград", area:"655,428", population: "51 095", cities: 1, villages: 21 },
            { name: "Община Самуил", area:"250,288", population: "7 005", cities: 0, villages: 14 },
            { name: "Община Цар Калоян", area:"168,282", population: "6 192", cities: 1, villages: 2 }
        ] },
        { name: "Област Русе", area:"2 895,954", population: "235 252", cities: 9, villages: 74, municipalities: [
            { name: "Община Борово", area:"252,227", population: "6 101", cities: 1, villages: 6 },
            { name: "Община Бяла", area:"352,032", population: "13 467", cities: 1, villages: 10 },
            { name: "Община Ветово", area:"353,002", population: "12 450", cities: 3, villages: 3 },
            { name: "Община Две могили", area:"342,295", population: "9 442", cities: 1, villages: 11 },
            { name: "Община Иваново", area:"490,748", population: "9 429", cities: 0, villages: 13 },
            { name: "Община Русе", area:"570,624", population: "167 585", cities: 2, villages: 12 },
            { name: "Община Сливо поле", area:"276,822", population: "10 855", cities: 1, villages: 10 },
            { name: "Община Ценово", area:"258,204", population: "5 923", cities: 0, villages: 9 }
        ] },
        { name: "Област Силистра", area:"2 846,315", population: "119 474", cities: 5, villages: 113, municipalities: [
            { name: "Община Алфатар", area:"248,566", population: "3 036", cities: 1, villages: 6 },
            { name: "Община Главиница", area:"481,230", population: "10 930", cities: 1, villages: 22 },
            { name: "Община Дулово", area:"566,356", population: "28 282", cities: 1, villages: 26 },
            { name: "Община Кайнарджа", area:"314,961", population: "5 070", cities: 0, villages: 15 },
            { name: "Община Силистра", area:"515,891", population: "51 386", cities: 1, villages: 18 },
            { name: "Община Ситово", area:"270,966", population: "5 396", cities: 0, villages: 12 },
            { name: "Община Тутракан", area:"448,345", population: "15 374", cities: 1, villages: 14 }
        ] },
        { name: "Област Сливен", area:"3 544,066", population: "197 493", cities: 6, villages: 104, municipalities: [
            { name: "Община Котел", area:"858,082", population: "19 391", cities: 1, villages: 21 },
            { name: "Община Нова Загора", area:"876,858", population: "39 010", cities: 1, villages: 32 },
            { name: "Община Сливен", area:"1 366,630", population: "125 268", cities: 2, villages: 43 },
            { name: "Община Твърдица", area:"442,496", population: "13 804", cities: 2, villages: 8 }
        ] },
        { name: "Област Смолян", area:"3 192,846", population: "121 752", cities: 8, villages: 232, municipalities: [
            { name: "Община Баните", area:"301,165", population: "4 923", cities: 0, villages: 20 },
            { name: "Община Борино", area:"173,204", population: "3 641", cities: 0, villages: 5 },
            { name: "Община Девин", area:"573,684", population: "13 013", cities: 1, villages: 15 },
            { name: "Община Доспат", area:"282,697", population: "9 116", cities: 1, villages: 7 },
            { name: "Община Златоград", area:"171,537", population: "12 321", cities: 1, villages: 8 },
            { name: "Община Мадан", area:"174,951", population: "12 276", cities: 1, villages: 43 },
            { name: "Община Неделино", area:"102,252", population: "7 221", cities: 1, villages: 15 },
            { name: "Община Рудозем", area:"182,919", population: "10 069", cities: 1, villages: 22 },
            { name: "Община Смолян", area:"864,997", population: "41 452", cities: 1, villages: 85 },
            { name: "Община Чепеларе", area:"365,440", population: "7 720", cities: 1, villages: 12 }
        ] },
        { name: "Софийска област", area:"7 081,366", population: "247 489", cities: 18, villages: 266, municipalities: [
            { name: "Община Антон", area:"76,098", population: "1 599", cities: 0, villages: 1 },
            { name: "Община Божурище", area:"142,884", population: "8 473", cities: 1, villages: 9 },
            { name: "Община Ботевград", area:"518,951", population: "33 175", cities: 1, villages: 12 },
            { name: "Община Годеч", area:"374,680", population: "5 375", cities: 1, villages: 19 },
            { name: "Община Горна Малина", area:"295,378", population: "6 209", cities: 0, villages: 14 },
            { name: "Община Долна баня", area:"66,854", population: "4 522", cities: 1, villages: 1 },
            { name: "Община Драгоман", area:"323,862", population: "5 362", cities: 1, villages: 33 },
            { name: "Община Елин Пелин", area:"452,088", population: "22 841", cities: 1, villages: 18 },
            { name: "Община Етрополе", area:"371,716", population: "12 047", cities: 1, villages: 9 },
            { name: "Община Златица", area:"163,306", population: "5 837", cities: 1, villages: 3 },
            { name: "Община Ихтиман", area:"541,775", population: "17 720", cities: 1, villages: 27 },
            { name: "Община Копривщица", area:"139,165", population: "2 410", cities: 1, villages: 0 },
            { name: "Община Костенец", area:"302,073", population: "12 793", cities: 2, villages: 7 },
            { name: "Община Костинброд", area:"254,412", population: "17 846", cities: 1, villages: 13 },
            { name: "Община Мирково", area:"207,876", population: "2 540", cities: 0, villages: 11 },
            { name: "Община Пирдоп", area:"152,435", population: "8 293", cities: 1, villages: 1 },
            { name: "Община Правец", area:"316,715", population: "7 569", cities: 1, villages: 10 },
            { name: "Община Самоков", area:"1 209,859", population: "38 089", cities: 1, villages: 27 },
            { name: "Община Своге", area:"868,619", population: "22 363", cities: 1, villages: 37 },
            { name: "Община Сливница", area:"187,433", population: "9 681", cities: 1, villages: 12 },
            { name: "Община Чавдар", area:"70,797", population: "1 272", cities: 0, villages: 1 },
            { name: "Община Челопеч", area:"44,390", population: "1 473", cities: 0, villages: 1 }
        ] },
        { name: "Област София", area:"1 348,902", population: "1 291 591", cities: 4, villages: 34, municipalities: [
            { name: "Столична община", area:"1 348,902", population: "1 291 591", cities: 4, villages: 34 }
        ] },
        { name: "Област Стара Загора", area:"5 156,885", population: "333 265", cities: 11, villages: 195, municipalities: [
            { name: "Община Братя Даскалови", area:"487,956", population: "9 677", cities: 0, villages: 23 },
            { name: "Община Гурково", area:"292,261", population: "5 127", cities: 1, villages: 10 },
            { name: "Община Гълъбово", area:"348,895", population: "13 394", cities: 1, villages: 10 },
            { name: "Община Казанлък", area:"634,781", population: "72 581", cities: 3, villages: 17 },
            { name: "Община Мъглиж", area:"388,884", population: "10 180", cities: 1, villages: 14 },
            { name: "Община Николаево", area:"96,524", population: "4 346", cities: 1, villages: 3 },
            { name: "Община Опан", area:"257,476", population: "2 950", cities: 0, villages: 13 },
            { name: "Община Павел баня", area:"518,675", population: "14 186", cities: 1, villages: 12 },
            { name: "Община Раднево", area:"545,145", population: "20 079", cities: 1, villages: 23 },
            { name: "Община Стара Загора", area:"1 063,418", population: "160 108", cities: 1, villages: 51 },
            { name: "Община Чирпан", area:"522,870", population: "21 637", cities: 1, villages: 19 }
        ] },
        { name: "Област Търговище", area:"2 710,286", population: "120 818", cities: 5, villages: 189, municipalities: [
            { name: "Община Антоново", area:"478,775", population: "6 262", cities: 1, villages: 58 },
            { name: "Община Омуртаг", area:"400,831", population: "21 853", cities: 1, villages: 41 },
            { name: "Община Опака", area:"157,352", population: "6 664", cities: 1, villages: 5 },
            { name: "Община Попово", area:"832,899", population: "28 775", cities: 1, villages: 34 },
            { name: "Община Търговище", area:"840,429", population: "57 264", cities: 1, villages: 51 }
        ] },
        { name: "Област Хасково", area:"5 533,292", population: "246 238", cities: 10, villages: 251, municipalities: [
            { name: "Община Димитровград", area:"567,603", population: "53 557", cities: 2, villages: 25 },
            { name: "Община Ивайловград", area:"814,137", population: "6 426", cities: 1, villages: 50 },
            { name: "Община Любимец", area:"344,271", population: "10 214", cities: 1, villages: 9 },
            { name: "Община Маджарово", area:"247,224", population: "1 665", cities: 1, villages: 18 },
            { name: "Община Минерални бани", area:"214,666", population: "5 899", cities: 0, villages: 12 },
            { name: "Община Свиленград", area:"700,315", population: "23 004", cities: 1, villages: 23 },
            { name: "Община Симеоновград", area:"222,941", population: "8 755", cities: 1, villages: 8 },
            { name: "Община Стамболово", area:"276,837", population: "5 934", cities: 0, villages: 26 },
            { name: "Община Тополовград", area:"710,877", population: "11 681", cities: 1, villages: 20 },
            { name: "Община Харманли", area:"694,625", population: "24 947", cities: 1, villages: 24 },
            { name: "Община Хасково", area:"739,796", population: "94156", cities: 1, villages: 36 }
        ] },
        { name: "Област Шумен", area:"3 390,338", population: "180 528", cities: 8, villages: 143, municipalities: [
            { name: "Община Велики Преслав", area:"277,626", population: "13 382", cities: 1, villages: 11 },
            { name: "Община Венец", area:"209,911", population: "7 137", cities: 0, villages: 13 },
            { name: "Община Върбица", area:"456,803", population: "10 391", cities: 1, villages: 15 },
            { name: "Община Каолиново", area:"293,535", population: "12 093", cities: 1, villages: 15 },
            { name: "Община Каспичан", area:"275,056", population: "7 976", cities: 2, villages: 7 },
            { name: "Община Никола Козлево", area:"264,335", population: "6 100", cities: 0, villages: 11 },
            { name: "Община Нови пазар", area:"317,646", population: "16 879", cities: 1, villages: 15 },
            { name: "Община Смядово", area:"353,767", population: "6 698", cities: 1, villages: 9 },
            { name: "Община Хитрино", area:"289,369", population: "6 223", cities: 0, villages: 21 },
            { name: "Община Шумен", area:"652,290", population: "93 649", cities: 1, villages: 26 }
        ] },
        { name: "Област Ямбол", area:"3 316,475", population: "131 447", cities: 4, villages: 105, municipalities: [
            { name: "Община Болярово", area:"667,881", population: "4 160", cities: 1, villages: 19 },
            { name: "Община Елхово", area:"701,703", population: "16 219", cities: 1, villages: 21 },
            { name: "Община Стралджа", area:"676,285", population: "12 781", cities: 1, villages: 21 },
            { name: "Община Тунджа", area:"1 179,882", population: "24 155", cities: 0, villages: 44 },
            { name: "Община Ямбол", area:"90,724", population: "71 132", cities: 1, villages: 0 }
        ] }
    ]   
};
