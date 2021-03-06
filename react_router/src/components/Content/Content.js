import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Post from './Post';
import Posts from './Posts';

const posteos = [{
    "_id": "5aec72240dd848ac0bfe803c",
    "index": 0,
    "guid": "a7345494-a7a8-46b1-a6cc-d886e8eacd8d",
    "isActive": false,
    "balance": "$1,612.73",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "brown",
    "name": "Richards Aguilar",
    "gender": "male",
    "company": "GADTRON",
    "email": "richardsaguilar@gadtron.com",
    "phone": "+1 (881) 515-2699",
    "address": "328 Everett Avenue, Cowiche, North Carolina, 6679",
    "about": "Aliquip anim in et voluptate fugiat velit excepteur fugiat ex culpa. Cillum labore fugiat pariatur do duis pariatur reprehenderit ad aliquip mollit consectetur. Mollit nostrud tempor eiusmod est sit eu exercitation sit magna minim fugiat tempor. Duis culpa aliqua duis eu. Duis ut aliquip reprehenderit ut nisi mollit ex sint id occaecat.\r\n",
    "registered": "2014-09-22T08:44:38 +03:00",
    "latitude": 24.190373,
    "longitude": -106.282667,
    "tags": [
      "excepteur",
      "qui",
      "nulla",
      "quis",
      "ad",
      "ut",
      "duis"
    ],
    "friends": [{
        "id": 0,
        "name": "Horn Craig"
      },
      {
        "id": 1,
        "name": "Marianne Lee"
      },
      {
        "id": 2,
        "name": "Flora Holcomb"
      }
    ],
    "greeting": "Hello, Richards Aguilar! You have 2 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5aec7224c7501b49a0b063ad",
    "index": 1,
    "guid": "d9ae5025-b86c-4a73-bab0-d303e931093c",
    "isActive": true,
    "balance": "$3,988.19",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "blue",
    "name": "May Martin",
    "gender": "male",
    "company": "TERSANKI",
    "email": "maymartin@tersanki.com",
    "phone": "+1 (801) 530-2597",
    "address": "194 Veronica Place, Albany, Indiana, 6555",
    "about": "Sit et amet do esse deserunt. Reprehenderit Lorem quis cupidatat est tempor sit laboris elit laboris non ipsum. Eiusmod laborum deserunt laborum reprehenderit aliqua consequat labore dolore do. Nisi magna cillum labore non. Qui sunt dolor ad occaecat.\r\n",
    "registered": "2015-12-01T04:04:57 +03:00",
    "latitude": 24.706396,
    "longitude": 31.94331,
    "tags": [
      "excepteur",
      "voluptate",
      "pariatur",
      "ullamco",
      "incididunt",
      "quis",
      "esse"
    ],
    "friends": [{
        "id": 0,
        "name": "Jean Shannon"
      },
      {
        "id": 1,
        "name": "Lambert Cummings"
      },
      {
        "id": 2,
        "name": "Moran Lopez"
      }
    ],
    "greeting": "Hello, May Martin! You have 2 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5aec722437d2b9c006ff3302",
    "index": 2,
    "guid": "760b851c-cd7a-497e-8ac3-4786214350a8",
    "isActive": true,
    "balance": "$2,841.30",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "green",
    "name": "Hampton Shaffer",
    "gender": "male",
    "company": "CORMORAN",
    "email": "hamptonshaffer@cormoran.com",
    "phone": "+1 (857) 482-3540",
    "address": "162 Howard Alley, Devon, Illinois, 8831",
    "about": "Aliquip adipisicing ex excepteur dolore commodo enim ea ipsum anim voluptate do nulla anim anim. Occaecat veniam amet dolore aliqua. Voluptate esse ipsum aliqua nisi fugiat quis. Et commodo aliquip enim cupidatat irure ad fugiat est ad sit.\r\n",
    "registered": "2014-11-06T03:43:52 +03:00",
    "latitude": 25.887325,
    "longitude": -8.021777,
    "tags": [
      "adipisicing",
      "est",
      "culpa",
      "duis",
      "minim",
      "incididunt",
      "enim"
    ],
    "friends": [{
        "id": 0,
        "name": "Allison Lindsey"
      },
      {
        "id": 1,
        "name": "Weber Mccormick"
      },
      {
        "id": 2,
        "name": "Nell Gilbert"
      }
    ],
    "greeting": "Hello, Hampton Shaffer! You have 2 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5aec7224b3c639899c969c30",
    "index": 3,
    "guid": "8443a9f5-b93f-46e6-a224-09407c4eec83",
    "isActive": true,
    "balance": "$1,164.30",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "green",
    "name": "Morales Beck",
    "gender": "male",
    "company": "EQUICOM",
    "email": "moralesbeck@equicom.com",
    "phone": "+1 (889) 538-2390",
    "address": "448 Herzl Street, Glenshaw, Northern Mariana Islands, 2672",
    "about": "Nisi ipsum velit duis tempor consectetur laboris ea. Eu enim qui nisi nostrud minim voluptate ut nulla velit. Enim quis pariatur commodo culpa deserunt culpa proident non consectetur excepteur enim voluptate deserunt. Id sint do amet laborum qui fugiat ullamco adipisicing nisi do. Sunt dolor culpa eiusmod ea velit. Sit eu ea enim in cillum excepteur magna id incididunt velit qui nisi. Voluptate veniam sunt culpa id commodo exercitation incididunt anim Lorem.\r\n",
    "registered": "2017-04-05T11:19:30 +03:00",
    "latitude": 65.326623,
    "longitude": -109.033305,
    "tags": [
      "laborum",
      "duis",
      "nisi",
      "amet",
      "cupidatat",
      "reprehenderit",
      "aliqua"
    ],
    "friends": [{
        "id": 0,
        "name": "Bryant Dalton"
      },
      {
        "id": 1,
        "name": "Burch Newton"
      },
      {
        "id": 2,
        "name": "Blair Weaver"
      }
    ],
    "greeting": "Hello, Morales Beck! You have 4 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5aec72241c0ad7f30f46206f",
    "index": 4,
    "guid": "2221b8d9-d2e7-4afa-a74a-062a6700e140",
    "isActive": true,
    "balance": "$2,327.17",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "green",
    "name": "Durham Snyder",
    "gender": "male",
    "company": "QIAO",
    "email": "durhamsnyder@qiao.com",
    "phone": "+1 (937) 452-2075",
    "address": "520 Seigel Court, Outlook, American Samoa, 3533",
    "about": "Quis irure laboris qui aute enim officia irure anim quis. Voluptate sint et ex incididunt. Ex cillum nisi exercitation sunt tempor. Excepteur mollit reprehenderit magna cillum cupidatat in veniam fugiat officia non do incididunt mollit. Reprehenderit dolore culpa elit et do proident labore id ipsum fugiat esse. Adipisicing ullamco deserunt adipisicing cillum commodo exercitation culpa commodo. Anim amet enim reprehenderit nisi do elit cillum.\r\n",
    "registered": "2017-03-02T09:12:43 +03:00",
    "latitude": 67.772449,
    "longitude": -74.75664,
    "tags": [
      "excepteur",
      "aute",
      "ea",
      "laborum",
      "aute",
      "pariatur",
      "in"
    ],
    "friends": [{
        "id": 0,
        "name": "Shields Savage"
      },
      {
        "id": 1,
        "name": "Rasmussen Hunter"
      },
      {
        "id": 2,
        "name": "Higgins Wynn"
      }
    ],
    "greeting": "Hello, Durham Snyder! You have 9 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5aec72241aa283aa1a0f6441",
    "index": 5,
    "guid": "683f7ee6-43eb-430e-b054-63b1aebb1e65",
    "isActive": false,
    "balance": "$3,636.95",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "blue",
    "name": "Jacquelyn Skinner",
    "gender": "female",
    "company": "MAROPTIC",
    "email": "jacquelynskinner@maroptic.com",
    "phone": "+1 (921) 521-2558",
    "address": "652 Riverdale Avenue, Bath, Pennsylvania, 6907",
    "about": "Magna laborum sit irure consequat dolor quis veniam ullamco officia elit. Sunt eu fugiat eu ad dolor nostrud aliqua consectetur mollit ex aliquip elit. Cupidatat velit et voluptate ipsum cillum sit. Aliqua tempor nostrud incididunt dolore. Esse do eiusmod ut enim elit incididunt consectetur fugiat dolore velit elit.\r\n",
    "registered": "2014-09-13T12:36:51 +03:00",
    "latitude": -77.066332,
    "longitude": -94.325468,
    "tags": [
      "veniam",
      "ex",
      "nulla",
      "velit",
      "enim",
      "incididunt",
      "est"
    ],
    "friends": [{
        "id": 0,
        "name": "Morin Sawyer"
      },
      {
        "id": 1,
        "name": "Nichole Baldwin"
      },
      {
        "id": 2,
        "name": "Genevieve Molina"
      }
    ],
    "greeting": "Hello, Jacquelyn Skinner! You have 2 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5aec722402bebe7679e70928",
    "index": 6,
    "guid": "81280936-e4ad-4805-921a-3feea4f283e6",
    "isActive": false,
    "balance": "$2,288.36",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "green",
    "name": "Suzette Gould",
    "gender": "female",
    "company": "NIQUENT",
    "email": "suzettegould@niquent.com",
    "phone": "+1 (899) 415-2788",
    "address": "609 Albany Avenue, Muir, Wisconsin, 109",
    "about": "Velit sint minim est dolor eiusmod velit id aliquip amet ad. Nostrud enim et occaecat pariatur. Irure Lorem aute aliqua laboris veniam anim cupidatat Lorem velit ea. Velit laboris tempor Lorem magna Lorem labore ad voluptate commodo veniam fugiat veniam elit. Enim officia enim nostrud esse fugiat esse voluptate dolore anim anim est voluptate. Exercitation est labore id sunt excepteur exercitation non exercitation sunt dolore pariatur cillum. Aliqua aliqua amet commodo pariatur reprehenderit.\r\n",
    "registered": "2017-12-23T11:21:45 +03:00",
    "latitude": 84.313441,
    "longitude": -9.832064,
    "tags": [
      "et",
      "nulla",
      "labore",
      "deserunt",
      "aliquip",
      "qui",
      "culpa"
    ],
    "friends": [{
        "id": 0,
        "name": "Jeri Dean"
      },
      {
        "id": 1,
        "name": "Dominguez Dickson"
      },
      {
        "id": 2,
        "name": "Shepherd Ellis"
      }
    ],
    "greeting": "Hello, Suzette Gould! You have 1 unread messages.",
    "favoriteFruit": "apple"
  }
];

export class Content extends Component {
  constructor(props){
    super(props);
  }
  Click(){
    console.log('click');
    this.props.history.push('/contact');;
  }
  GoToLogin(){
    this.props.history.push('/login');
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Content</h1>
        <p>Ruta activa: {this.props.location.pathname}</p>
        <button onClick={this.Click.bind(this)}>Nav Programatica</button>
        <button onClick={this.GoToLogin.bind(this)}>Login</button>
        <div>
          <ul>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/posts'>Posts</Link>
            </li>
            < li> 
              <Link to='/post'>Post</Link>
            </li>
            < li> 
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </div>
        <Route path='/about' component={About}/>
        <Route path='/posts' component={Posts}/>
        <Route path='/posts/:id' component={Post}/>
        <Route path='/contact' component={Contact} />  
      </div>
    )
  }
}

export default Content;
