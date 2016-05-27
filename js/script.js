
$(document).ready(function() {

    $(document).mySliderPlugin();




    var html = $('#my_tmpl').html();
    var data = {
        name: "Гамайло Екатерина Анатольевна",
        photo: "img/photo.JPG",
        course: "Студент курса Frontend Developer GoForIt online",
        reason1: "Люблю получать новые знания",
        reason2: "Мне нравятся информационые технологии",
        reason3: "Хочу освоить новую профессию",
        mobile: "+380501919401",
        sn_reference: "https://vk.com/id184221305",
        feedback: "Я постараюсь приложить все свои силы, чтобы оказаться в числе лучших студентов и затем заниматься востребованной и творческой работой"


    };

    var content = tmpl(html, data);
    $('body').append(content);


  var tmpl_loDash = _.template(document.getElementById('list-template').innerHTML);


  var result = tmpl_loDash({
        name: "Гамайло Екатерина Анатольевна",
        photo: "img/photo.JPG",
        course: "Студент курса Frontend Developer GoForIt online",
        reason1: "Люблю получать новые знания",
        reason2: "Мне нравятся информационые технологии",
        reason3: "Хочу освоить новую профессию",
        mobile: "+380501919401",
        sn_reference: "https://vk.com/id184221305",
        feedback: "Я постараюсь приложить все свои силы, чтобы оказаться в числе лучших студентов и затем заниматься востребованной и творческой работой"
});
  $('body').append(result);;

});// end ready
