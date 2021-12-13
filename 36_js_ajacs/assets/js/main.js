/*
C - create PUT
R - read GET
U - update POST
D - delete DELETE
*/

function loadPage(page_url){
    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', page_url);
    // xhr.send();    
    // xhr.onreadystatechange = function(){               
    //     if(xhr.readyState === 4){
    //         if(xhr.status===200 || xhr.status===301 || xhr.status===302){            
    //         document.getElementById("content").innerHTML = xhr.response;
    //         }else if(xhr.status===404){
    //             loadPage('pages/404.html');
    //         }else{
    //             loadPage('pages/500.html');
    //         }
    //     }
    // } // 200, 301, 302, 404

    // fetch(page_url)
    //     .then((resp)=>{           
    //         if(resp.status===200 || resp.status===301 || resp.status===302){ 
    //             return resp.text();                         
    //         }else if(resp.status===404){
    //             loadPage('pages/404.html');
    //         }else{
    //             loadPage('pages/500.html');
    //         }          
    //     })
    //     .then((data)=>{            
    //         document.getElementById("content").innerHTML = data;
    //     });
    //     

    // axios(page_url)
    //     .then(resp=>{            
    //         document.getElementById("content").innerHTML = resp.data;
    //     })
    //     .catch(()=>{ 
    //         loadPage('pages/404.html');           
    //     }); // without jquary

    $.ajax({
        url:page_url,
        type:'get',
        dataType: 'html',
        success:function(html){            
            $("#content").html(html);
        },
        error:function(){
            loadPage('pages/404.html');
        }
    }); // with iquary

    // $.get(page_url, (html)=>{        
    //     $("#content").html(html);
    // });
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
        },
        error:function(){           
            alert("Menu JSON not found");
        }
    });

    $(document).on('click', '#main_menu a', function(e){
        e.preventDefault();
        loadPage($(this).attr("href"));
    });
});