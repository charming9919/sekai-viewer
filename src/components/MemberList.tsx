import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useRouteMatch } from "react-router-dom";
import { useLayoutStyles } from "../styles/layout";
import { ContentTransModeType } from "../types";
import { units } from "../utils/units";
import { UnitOutlinedLogoMap } from "../utils/resources";

const useStyle = makeStyles((theme) => ({
  unitIcon: {
    [theme.breakpoints.down("md")]: {
      height: "72px",
    },
    height: "96px",
  },
  memberSelectImg: {
    height: "300px",
    cursor: "pointer",
  },
}));

const MemberList: React.FC<{ contentTransMode: ContentTransModeType }> = ({
  contentTransMode,
}) => {
  const classes = useStyle();
  const layoutClasses = useLayoutStyles();
  const { t } = useTranslation();
  const { path } = useRouteMatch();

  useEffect(() => {
    document.title = t("title:memberList");
  }, [t]);

  return (
    <Fragment>
      <Typography variant="h6" className={layoutClasses.header}>
        {t("common:member")}
      </Typography>
      <Grid container spacing={8} direction="column">
        {units.map(({ id, characters }) => (
          <Grid key={"unit-" + id} item container justify="center" spacing={2}>
            <Grid item container justify="center">
              <img
                className={classes.unitIcon}
                src={UnitOutlinedLogoMap[id]}
                alt={id}
              ></img>
            </Grid>
            <Grid item container justify="center" style={{ lineHeight: "0" }}>
              {characters.map((i) => (
                <Link
                  key={`chara-${i}`}
                  to={path + "/" + i}
                  style={{
                    textDecoration: "none",
                    marginLeft: i > 0 ? "10px" : "0",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    className={classes.memberSelectImg}
                    src={`${process.env.REACT_APP_ASSET_DOMAIN}/file/sekai-assets/character/character_select_rip/chr_tl_${i}.webp`}
                    alt={String(i)}
                  ></img>
                </Link>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default MemberList;
