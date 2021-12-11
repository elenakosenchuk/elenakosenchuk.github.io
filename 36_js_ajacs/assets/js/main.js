/*
C - create PUT
R - read GET
U - update POST
D - delete DELETE
*/

function loadPage(page_url){
    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', 'pages/main.html');
    // xhr.send();    
    // xhr.onreadystatechange = function(){
    //     console.log(xhr);        
    //     if(xhr.readyState === 4){
    //         console.log(xhr.response);
    //         document.getElementById("content").innerHTML = xhr.response;
    //     }
    // }

    // fetch('pages/main.html')
    //     .then((resp)=>{            
    //         return resp.text();
    //     })
    //     .then((data)=>{            
    //         document.getElementById("content").innerHTML = data;
    //     });

    // axios('pages/main.html')
    // .then(resp=>{
    //     console.log(resp);
    //     document.getElementById("content").innerHTML = resp.data;
    // });

    // $.ajax({
    //     url:'pages/main.html',
    //     type:'get',
    //     dataType: 'html',
    //     success:function(html){
    //         // let $html = $(html);
    //         // let h1 = $html[0];
    //         // console.log(h1);
    //         $("#content").html(html);
    //     }
    // });

    $.get(page_url, (html)=>{
        $("#content").html(html);
    });
}

// loadPage();

$(function(){
    loadPage('pages/main.html');
    $.ajax({
        url:'common/menu.json',
        type:'get',
        dataType:'json',
        success:function(json){
            let html = '';
            for(let i=0;i<json.length;i++){
                html += `<a class="me-3 py-2 text-dark text-decoration-none" href="pages/${json[i].file}.html">${json[i].name}</a>`;
            }
            $('#main_menu').html(html);         
        } 
    });
    $(document).on('click', '#main_menu a', function(e){
        e.preventDefault();
        loadPage($(this).attr("href"));
    });
});