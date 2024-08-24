
![KCAapi](https://i.imgur.com/krb2i96.png)
# KCApi - KitsuneCodeApi

- [KCApi](#kcapi)
  - [Informacion](#informacion)
  - [Instalacion & Uso](#instalacion--uso)
  - [Contenido](#contenido)
    - [Acciones y reacciones](#actions-reactions)
    - [Anime](#anime)
    - [NSFW](#nsfw)
  - [Ayuda](#ayuda--soporte)
    - [Soporte](#soporte)
    - [Proyectos](#proyectos)
    - [Donaciones](#donaciones)

## Informacion

¿Te complicas mucho para hacer un bot interactivo o para crear comandos de roleplay con gifs?

KCApi es una api que te ayudara a conseguir imagenes de Anime, gifs de interacciones, funciones nsfw y mucho mas por venir

Asi que olvidate de estar sufriendo por buscar uno por uno los gifs para tu bot o de usar un monton de librerias que no cumplen todas tus expectativas o que incluso no funcionan bien. Ademas de estar completamente en español!!

> Te recomiendo leer la documentacion y ver los ejemplos o si no para que usaras mi libreria xD

## Instalacion & Uso

> Para poder usar la api necesitas un `token`, es gratuito y puedes obtenerlo yendo a mi [servidor de Discord](https://discord.gg/DqqSjCqCQd), en el canal `KCApi`

Cada categoria tiene su propio contructor para tener todo mas organizado y separado de cada contenido, ademas para garantizar su correcto funcionamiento y optimizarla mejor.

Todas las funciones, seguidas de ejemplos y como usar la libreria se encuentran en la  **[documentacion](https://docs.kitsunecode.tk)**, cabe aclarar que cuenta con un soporte para **Discord.js versiones 12  y 13** y proximamente tambien para **Eris**

Todas las funciones son promesas, a si que no olvides usar el `async/await` o el `then/catch`

Cabe aclarar que los gifs son del tipo anime y poseen 2 valores, **url** y **anime**, el primer valor es el link del gif y el segundo es el nombre del anime al que pertenece!!

## Contenido

<a name="actions-reactions"></a>

### Acciones y reacciones

- **Ejemplo de uso**

```js
// Se declara la libreria nwn
const KCApi = require("kcapi");
// Se delclara action y usamos una nueva action(token) :3
const action = new KCApi.action("TOKEN");
// Se delclara reaction y usamos una nueva reaction(token) :3
const reaction = new KCApi.reaction("TOKEN");

// En este caso usaremos una accion pero es el mismo processo con las reacciones

// Retorna undefined por no estar en funcion async
action.kiss();

async function Accion() {
     const awa = await action.camp()
     console.log(awa.url) 
     /* 
     Retorna con la url del gif:     
     https://actions.kitsunecode.tk/camp/camp04.gif <- Es mi cdn de acciones nwn
     */
     console.log(awa.anime)
     /* 
     Retorna con el nombre del anime del gif:     
     Yuru Camp
     */
     console.log(awa)
     /* 
     Retorna con el JSON:  
     {   
          url: `https://actions.kitsunecode.tk/camp/camp04.gif`
          anime: 'Yuru Camp'
     }
     */
}

// Y la ejecutamos
Action()
```
- **Lista de acciones**

| Acción | Descripción |
| :--- | :--- |
| camp | Acampas |
| cook | Cocinas |
| cuddle | Te acurrucas nwn |
| cure | Curación |
| deathnote | No escribas mi nombe &gt;.&lt;  **NUEVA** |
| draw | Dibujas |
| drive | Conduces a algún lado |
| eat | Comes |
| feed | Alimentas a alguien |
| hug | Abrazo |
| kickbut | Pateas a alguien |
| kill | Matas a alguien c: |
| kiss | B-besas a alguien... |
| pat | Acaricias a alguien |
| peek | Espías |
| playing | Juega algún videojuego |
| poke | Fastidias a alguien, ami no u.u |
| punch | Golpeas a alguien... xD |
| run | ¿Por que huyes de mi? |
| sape | Sape... |
| shot | De donde sacaste esa arma .\_. |
| sip | Tomas una bebida |
| slap | Abofeteas a alguien |
| sleep | Vas a mimir |
| spank | menudo pervertido &gt;.&lt; |
| stare | Deja de verme asi &gt;.&lt; |
| tickle | Cosquillas |
| travel | Viajas |
| work | Trabajas, virtual, pero trabajas |
- **Lista de reacciones**

| Reacción | Descripción |
| :--- | :--- |
| angry | Te enojas |
| baka | BAKAAA!! ¬¬" |
| blush | Te sonrojas &gt;//&lt;" |
| bored | Que aburrido... |
| cry | Lloras ;-; |
| dance | Muestras tus pasos de baile nwn |
| laugh | Te ríes, espero que no de mi n.n |
| like | Lo apruebas |
| nervous | Nervioso...? |
| pout | Te molestas y haces puchero |
| sad | Te pones triste |
| scream | No grites!!! |
| smug | Presumes algo |
| teehee | Hehe nwn |
| think | Piensas |
| vomit | Vomitas xD |
| wink | Guiño, guiño uwu |
| yandere | Dejas ver tu modo yandere :)|

> Mas acciones y reacciones próximamente, planeo agregar aun mas nwn
---
<a name="anime"></a>

### Anime

- **Ejemplo de uso**

```js
// Se declara la libreria nwn
const KCApi = require("kcapi");
// Se delclara reaction y usamos una nueva reaction(token) :3
const reaction = new KCApi.anime("TOKEN");

// Retorna undefined por no estar en funcion async
reaction.kiss();

async function Anime() {
     const awa = await anime.neko()
     console.log(awa.url) // Retorna una chica neko nya!!

     const ewe = await anime.waifu()
     console.log(ewe.url) // Tu waifu
     console.log(ewe.anime) // El anime al que pertenece
     console.log(ewe.waifu_name) // Nombre de la waifu.
}

// Y la ejecutamos
Anime()
```
| Tipo | Descripción |
| :--- | :--- |
| foxgirl | Una chica zorro |
| girl | Chica de anime |
| kemonomimi | Chica kemo |
| mbwallpaper | Fondo de pantalla para mobiles |
| neko | Nekos nya!! |
| wallpaper | Fondo de pantalla para PC |
| waifu | Obtienes una waifu |

<a name="nsfw"></a>

### NSFW


- **Ejemplo de uso**

```js
// Se declara la libreria nwn
const KCApi = require("kcapi");
// Se delclara nsfw y usamos una nueva nsfw(token) >//<
const nsfw = new KCApi.nsfw("TOKEN");

// Retorna undefined por no estar en funcion async
nsfw.ahegao();

async function NSFW() {
     const awa = await nsfw.ahegao()
     console.log(awa.url) // Obtienes algo lewd 737
}

// Y la ejecutamos
NSFW()
```
- **Tipos NSFW**

| Tipo | Descripción |
| :--- | :--- |
| ahegao | Un ahegao |
| boobs | ... |
| hentai | Ya saben todos que es xD |
| lwneko | Nekos lewd &gt;//&lt; |
| pussy | Ehm... |
| trap | No hace falta saber lo que es... |
| uniform | Chicas con uniforme uwu |
| yuri | Yuri ewe |

#### Acciones NSFW
> Se utilizan de la misma manera que las acciones normales, pero se cuidadoso por que estas acciones son algo... lewd... jsjs

| Tipo | Descripción |
| :--- | :--- |
| anal | ... |
| boobjob | Ehm...  |
| cum | xD... |
| fap | Vale... |
| feetjob | ... |
| fuck | El normal x//D |
| happyend | Good ending |
| kuni | . . . |
| spank | Lo mismo de action pero nsfw |
| suck | Glup... |

<a name="ayuda"></a>
## Ayuda

<a name="soporte"></a>
### Soporte

Has visto algo inusual en la libreria, crees que ha pasado algo con el sitio web de la api, nesesitas ayuda, quieres apoyar con recursos o tienes una idea, puedes contactarme aqui abajo uwu.

- **Discord**
  - Servidor de la creadora -> Proximamente
  - [Servidor de Soporte](https://discord.gg/DqqSjCqCQd)
  <br>
- **Staff**
  - Creadora: **KitsuneCode**
       - Twitter: [`@KitsuneCode`](https://twitter.com/KitsuneCode)
       - GitHub: [`KitsuneCode`](https://github.com/KitsuneCode)
       - Facebook: [`KitsuneCode`](https://facebook.com/KitsuneCode)
       - Sitio Web: [`KisuneCode.tk`](https://kitsunecode.tk)-> Aun en construccion uwu

---

<a name="proyectos"></a>

### Proyectos

| Proyecto  | Descripcion |
| :-------------------- | :------------------ |
| [KCUtils](https://www.npmjs.com/) | Funciones utiles para Discord (Proximamente)  |
| [Wikicord](https://www.npmjs.com/)  | Wikipedia para discord (Proximamente) |

---

<a name="donaciones"></a>

### Donaciones
Proximamente, por que tengo 16 y aun no puedo hacer eso xD, pero puedes apoyarme uniendote a mis servidores

---

<a name="ayuda"></a>

Es importante leer la documentacion ya que asi sabras como utilizar cada funcion, se que es aburrido leer pero si quieres sacar el maximo provecho por favor haslo, me esforce en hacerla lo mejor posible para que programadores novatos puedan entenderla uwu

> Documentacion: [Click aqui](https://docs.kisunecode.tk)

Si no sabes leer la documentacion te dejo este hermoso video de [Como leer la documentacion de discord por ksgrapin](https://www.youtube.com/watch?v=FnN2OP5S6s8)

> Actualizacion: 04 de Septiembre del 2021 > Discord.js v13
> Version: 1.0.0


# Gracias por tu apoyo ♥
