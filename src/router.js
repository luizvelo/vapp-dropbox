import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './pages/Inicio';
import Toolbar from './template/Toolbar';
import Navbar from './template/Navbar';

Vue.use(Router);

// import Contato from './pages/Contato';
// import ContatoDetail from './components/ContatoDetail';
// import ContatoList from './components/ContatoList';
// import ContatoEdit from './components/ContatoEdit';

const Contato = () => import('./pages/Contato');
const ContatoEdit = () => import('./components/ContatoEdit');
const ContatoDetail = () => import('./components/ContatoDetail');
const ContatoList = () => import('./components/ContatoList');
const DropboxUpload = () => import('./components/DropboxUpload');

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: '/',
      name: 'inicio',
      // component: Inicio,
      components: {
        default: Inicio,
        toolbar: Toolbar,
        navbar: Navbar
      }
    },
    {
      path: '/dropbox',
      name: 'dropbox',
      // component: DropboxUpload,
      components: {
        default: DropboxUpload,
        toolbar: Toolbar,
        navbar: Navbar
      }
    },
    {
      path: '/contato',
      // component: Contato,
      components: {
        default: Contato,
        toolbar: Toolbar,
        navbar: Navbar
      },
      props: true,
      children: [
        { path: '', component: ContatoList },
        { path: ':id', component: ContatoDetail, props: true },
        {
          path: ':id/editar',
          component: ContatoEdit,
          props: true,
          name: 'editarContato',
          beforeEnter: (to, from, next) => {
            console.log('acessou a página editarContato');
            next();
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/dropbox'
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('to', to);
  console.log('from', from);
  console.log('antes das rotas: global');
  next();
});


export default router;