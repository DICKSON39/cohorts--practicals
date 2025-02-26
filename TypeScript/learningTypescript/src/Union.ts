const logId = (id: string | number | boolean) => {
    console.log(id)
  }

  logId("abc")
  logId(123)
  logId(true)

  function getUsername(username: string) {
    if (username !== null) {
      return `User: ${username}`
    } else {
      return 'Guest'
    }
  }

  const result = getUsername('Alice')


// const logSize = (size: string) => {
//     console.log(size.toUpperCase())
//   }
  
//   logSize('small')

  const recordOfSizes = {
    small: 'small',
    large: 'large',
    medium: 'medium'
  }
  
  const logSize = (size: 'small' | 'large' | 'medium') => {
    console.log(recordOfSizes[size])
  }
  
  logSize('medium')