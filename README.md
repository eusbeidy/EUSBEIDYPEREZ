# EUSBEIDYPEREZ 
## descripcion 
este es mi repositorio de practicas 
### autor 
[eus] (https://www.facebook.com/eusbeiidy.fernaandez)
<header>
        <h1>Johana Bahamón</h1>
        <p class="actriz">Actriz</p>
    <nav>
        <label for="checkMenu" class="menu-btn">
            <span class="material-symbols-outlined">Menu</span>
        </label>
        <input type="checkbox" id="checkMenu" class="menu-check">
        <div class="links">
            <ul>
            <li><a href="#index"> Inicio</a></li>
            <li><a href="#biografia">Biografia</a></li>
            <li><a href="#Fundacion Accion Interna"> Fundación Acción Interna</a></li>
            <li><a href="#Distinciones y Reconocimientos">Distinciones y reconocimientos</a></li>
            <li><a href="#peliculas y programas de television">Películas y programas de televisión</a></li>
            <li><a href="#videos">Videos</a>
        </ul>
        </div>
    </nav>
</header>

.menu-btn{
position: absolute;
top: 1rem;
right: 1rem;
color: black;
background-color: #FFDDD2;
border: 2px solid black;
padding: 10px;
width: 70px;
height: 65px;
font-size: 18px;
float: left;
}
.menu-check{
    display: none;
}
.menu-check:checked + .links{
    transform: translateY(0);
}
.links{
    transform: translateY(-200%);
    transition: 0;
    position: absolute;
    top: 50px;
    right: 1rem;
    width: 120px;
    height: 200px;
    text-align: center;
    display: flex;
    flex-direction: column;

}
media screen and (min-768px){
    *body{
        box-sizing: border-box;
        }
        body{
            background-color: #FFDDD2;
            font-family: sans-serif;
            padding: 90px 20px 0;
        }
        .header{
            background-color: blue;
            height: 80px;
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
        }
        .nav{
            display: flex;
            justify-content: space-between;
            max-width: 1024px;
            margin: 0 auto;
        }
        .nav-link{
            color: white;
            text-decoration: none;
        }
        .h1{
            font-family: 'Pacifico', cursive;
            font-size: 25px;
            font-weight: bold;
            color: #06283D;
            padding: 0 20px;
            margin: 0%;
            line-height: 80px;
        }
        .menu{
            display:flex ;
            list-style: none;
        }
        .nav-menu-link{
            font-size: 12px;
            margin: 0 8px;
            padding-top: 10px;
            text-transform: uppercase;
            width: max-content;
            height: 30px;
        }
        .nav-menu-link{
            border-radius: 3px;
        }
        .nav-menu-link:hover{
            background-color: #06283D;
        }
        
        
        footer{
            background: rgb(69,34,195);
        background: linear-gradient(0deg, rgba(69,34,195,1) 0%, rgba(124,21,104,0.908000700280112) 100%);
        padding: 4px;
        }
}