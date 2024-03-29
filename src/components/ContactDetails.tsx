import { Grid } from "@material-ui/core";
import React from "react";
import FooterHeader from "./FooterHeader";

const ContactDetails = () => {
  return (
    <Grid style={{ width: "fit-content" }}>
      <FooterHeader title="Yhteystiedot" />
      <address style={{ lineHeight: "27px", fontStyle: "normal" }}>
        Kosken Autohuolto Oy <br />
        Hämeentie 2 <br />
        31500, Koski TL <br />
        info@koskenseo.fi <br />
        (02) 4841 625 (kahvila) <br />
        (02) 4841 690 (huolto) <br />
        (02) 4846 266 (kahvila / Palikkala)
      </address>
    </Grid>
  );
};

export default React.memo(ContactDetails);
