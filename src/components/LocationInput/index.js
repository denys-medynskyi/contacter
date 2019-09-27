import React from "react";
import TextField from "@material-ui/core/TextField";
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
// set response language. Defaults to english.
Geocode.setLanguage("en");


export default class LocationInput extends React.Component {
  constructor(props) {
    super(props);

    // window.navigator.geolocation.getCurrentPosition(({ coords }) => {
    //   Geocode.fromLatLng(coords.latitude, coords.longitude).then(
    //     response => {
    //       const address = response.results[0].formatted_address;
    //       console.log(address)
    //     },
    //     error => {
    //       console.error(error);
    //     }
    //   )
    // });

    const address = "Kolokol'nikov Pereulok, 6, Moskva, Russia, 107045";

    this.state = { value: address };
  }

  render() {
    return (
      <TextField
        variant="outlined"
        placeholder="Location"
        name="location"
        margin="normal"
        onChange={this.props.onChange}
        value={this.state.value}
      />
    );
  }
}
