const API_URL = "http://localhost:8000/v1"

async function httpGetPlanets() {

  // TODO: Once API is ready.
  const response = await fetch(`${API_URL}/planets`)
  
  return response.json()

  // Load planets and return as JSON.
}

async function httpGetLaunches() {

  // Load launches, sort by flight number, and return as JSON.
  const response = await fetch(`${API_URL}/launches`)
  const data = await response.json()
  return data.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  })

}

async function httpSubmitLaunch(launch) {
  try {
    console.log(launch)
    return await fetch(`${API_URL}/launches`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(launch)
    })
  } catch (error) {
    return {
      ok: false
    }

  }


}

async function httpAbortLaunch(id) {
  console.log(id)
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "delete"
    })
  } catch (error) {
    return {
      ok: false
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};