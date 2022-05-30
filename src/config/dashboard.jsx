import {
  HomeIcon,
  UserGroupIcon,
  DocumentDuplicateIcon,
  SaveIcon
} from '@heroicons/react/outline'

import Home from '~/pages/Home'

const dashboard = [
  {
    route: { path: '/', element: <Home /> },
    navigation: { name: 'Beranda', path: '/', icon: HomeIcon }
  },
  {
    navigation: { name: 'Peneliti', path: '/researcher', icon: UserGroupIcon }
  },
  {
    navigation: {
      name: 'Penelitian',
      path: '/researcher',
      icon: DocumentDuplicateIcon
    }
  },
  {
    navigation: { name: 'Permintaan', path: '/request', icon: SaveIcon }
  }
]

export default dashboard
