import {
  HomeIcon,
  UserGroupIcon,
  DocumentDuplicateIcon,
  SaveIcon
} from '@heroicons/react/outline'

const dashboard = [
  {
    route: {},
    navigation: { name: 'Beranda', path: '/', icon: HomeIcon }
  },
  {
    route: {},
    navigation: { name: 'Peneliti', path: '/researcher', icon: UserGroupIcon }
  },
  {
    route: {},
    navigation: {
      name: 'Penelitian',
      path: '/research',
      icon: DocumentDuplicateIcon
    }
  },
  {
    route: {},
    navigation: { name: 'Permintaan', path: '/request', icon: SaveIcon }
  }
]

export default dashboard
