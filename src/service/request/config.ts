let BASE_URL = ''
const TIMEOUT = 5000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://152.136.185.210:5000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://production'
} else {
  BASE_URL = 'http://test'
}

export { BASE_URL, TIMEOUT }
