import {
  HomeIcon,
  UserGroupIcon,
  DocumentDuplicateIcon,
  SaveIcon
} from '@heroicons/react/outline'

import Home from '../pages/Home'
import Researcher from '../pages/Researcher'
import Research from '../pages/Research'
import Request from '../pages/Request'

const dashboard = [
  {
    route: { path: '/', element: <Home /> },
    navigation: { name: 'Beranda', path: '/', icon: HomeIcon }
  },
  {
    route: { path: '/researcher', element: <Researcher /> },
    navigation: { name: 'Peneliti', path: '/researcher', icon: UserGroupIcon }
  },
  {
    route: { path: '/research', element: <Research /> },
    navigation: {
      name: 'Penelitian',
      path: '/research',
      icon: DocumentDuplicateIcon
    }
  },
  {
    route: { path: '/request', element: <Request /> },
    navigation: { name: 'Permintaan', path: '/request', icon: SaveIcon }
  }
]

export default dashboard
