function nameQtyArray(resourceObj) {
  let resourceArray = []
  for (let key in resourceObj) {
    if (resourceObj[key] > 0) {
      let tempObj = { name: key, quantity: resourceObj[key] }
      resourceArray.push(tempObj)
    }
  }
  return resourceArray
}

export default nameQtyArray
