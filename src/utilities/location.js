//-----------  Helpers  -----------//

export function getQueryVariable(variable){
  if (typeof document === 'undefined') return null

  const query = window.location.search.substring(1)
  const vars  = query.split('&')

  for (var i = 0; i < vars.length; i++){
    const pair = vars[i].split('=')

    if(pair[0] == variable)
      return decodeURIComponent(pair[1])
  }

  return null
}