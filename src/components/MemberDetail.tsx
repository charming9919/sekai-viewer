import {
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab";
import React, { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import Viewer from "react-viewer";
import { useLayoutStyles } from "../styles/layout";
import {
  ContentTransModeType,
  IGameChara,
  ICharaUnitInfo,
  ICharaProfile,
  ICardInfo,
} from "../types";
import { useCachedData, useCharaName } from "../utils";
import { UnitOutlinedLogoMap } from "../utils/resources";
import { CardThumb } from "./subs/CardThumb";
// import { useAssetI18n } from "../utils/i18n";

const profileItems = [
  // t(...) comments are written for i18next-parser (i18next)
  // do NOT delete them, or i18next will not extract keys anymore.
  {
    // t("member:height")
    caption: "member:height",
    key: "height",
  },
  {
    // t("member:birthday")
    caption: "member:birthday",
    key: "birthday",
  },
  {
    // t("member:characterVoice")
    caption: "member:characterVoice",
    key: "characterVoice",
  },
  {
    // t("member:school")
    caption: "member:school",
    key: "school",
  },
  {
    // t("member:schoolYear")
    caption: "member:schoolYear",
    key: "schoolYear",
  },
  {
    // t("member:hobby")
    caption: "member:hobby",
    key: "hobby",
  },
  {
    // t("member:specialSkill")
    caption: "member:specialSkill",
    key: "specialSkill",
  },
  {
    // t("member:favoriteFood")
    caption: "member:favoriteFood",
    key: "favoriteFood",
  },
  {
    // t("member:hatedFood")
    caption: "member:hatedFood",
    key: "hatedFood",
  },
  {
    // t("member:weak")
    caption: "member:weak",
    key: "weak",
  },
  {
    // t("member:introduction")
    caption: "member:introduction",
    key: "introduction",
  },
] as const;

const colorItems = [
  {
    // t("member:colorCode")
    caption: "member:colorCode",
    key: "colorCode",
  },
  {
    // t("member:skinColorCode")
    caption: "member:skinColorCode",
    key: "skinColorCode",
  },
  {
    // t("member:skinShadowColorCode1")
    caption: "member:skinShadowColorCode1",
    key: "skinShadowColorCode1",
  },
  {
    // t("member:skinShadowColorCode2")
    caption: "member:skinShadowColorCode2",
    key: "skinShadowColorCode2",
  },
] as const;

const useStyle = makeStyles((theme) => ({
  tabpanel: {
    padding: theme.spacing("1%", 0, 0, 0),
  },
  media: {
    paddingTop: "70%",
    cursor: "pointer",
  },
  nameLabel: {
    paddingTop: "30%",
    backgroundSize: "contain",
  },
  nameVerticalLabel: {
    paddingTop: "45%",
    backgroundSize: "contain",
  },
  "grid-out": {
    padding: theme.spacing("1%", "0"),
  },
  "unit-logo-img": {
    height: "64px",
  },
}));

const MemberDetail: React.FC<{ contentTransMode: ContentTransModeType }> = ({
  contentTransMode,
}) => {
  const { charaId } = useParams<{ charaId: string }>();
  const classes = useStyle();
  const layoutClasses = useLayoutStyles();
  const { t } = useTranslation();
  // const { assetT } = useAssetI18n();
  const getCharaName = useCharaName(contentTransMode);

  const [cards] = useCachedData<ICardInfo>("cards");
  const [charas] = useCachedData<IGameChara>("gameCharacters");
  const [charaUnits] = useCachedData<ICharaUnitInfo>("gameCharacterUnits");
  const [charaProfiles] = useCachedData<ICharaProfile>("characterProfiles");

  const [chara, setChara] = useState<IGameChara>();
  const [charaUnit, setCharaUnit] = useState<ICharaUnitInfo>();
  const [charaSupportUnits, setCharaSupportUnits] = useState<ICharaUnitInfo[]>(
    []
  );
  const [charaProfile, setCharaProfile] = useState<ICharaProfile>();
  const [charaCards, setCharaCards] = useState<ICardInfo[]>([]);
  const [tabVal, setTabVal] = useState<string>("0");
  const [visible, setVisible] = useState<boolean>(false);
  const [activeIdx, setActiveIdx] = useState<number>(0);

  useEffect(() => {
    if (
      charas.length &&
      charaUnits.length &&
      charaProfiles.length &&
      cards.length
    ) {
      const chara = charas.find((c) => c.id === Number(charaId));
      const charaCards = cards.filter((card) => card.characterId === chara?.id);
      setChara(chara);
      setCharaUnit(
        charaUnits.find(
          (cu) => cu.gameCharacterId === chara?.id && cu.unit === chara?.unit
        )
      );
      // list support units if the character is a member of VIRTUAL SINGER
      if (chara?.unit === "piapro") {
        setCharaSupportUnits(
          charaUnits
            .filter(
              (cu) => cu.gameCharacterId === chara.id && cu.unit !== "piapro"
            )
            .filter((cu) => charaCards.some((cc) => cc.supportUnit === cu.unit))
        );
      }
      setCharaProfile(charaProfiles.find((cp) => cp.characterId === chara?.id));
      setCharaCards(charaCards);
    }
  }, [charas, setChara, charaId, charaUnits, charaProfiles, cards]);

  useEffect(() => {
    document.title = t("title:memberDetail", {
      name: getCharaName(Number(charaId)),
    });
  }, [t, charaId, getCharaName]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setTabVal(newValue);
  };

  return chara && charaUnit && charaProfile && charaCards.length ? (
    <Fragment>
      <Typography variant="h6" className={layoutClasses.header}>
        {getCharaName(Number(charaId))}
      </Typography>
      <Container className={layoutClasses.content} maxWidth="sm">
        <TabContext value={tabVal}>
          <Paper>
            <Tabs
              value={tabVal}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="desktop"
            >
              <Tab label={t("member:tab.title[0]")} value="0"></Tab>
              <Tab label={t("member:tab.title[1]")} value="1"></Tab>
              <Tab label={t("member:tab.title[2]")} value="2"></Tab>
            </Tabs>
            <TabPanel value="0" classes={{ root: classes.tabpanel }}>
              <Card
                onClick={() => {
                  setActiveIdx(0);
                  setVisible(true);
                }}
              >
                <CardMedia
                  classes={{ root: classes.media }}
                  image={`${process.env.REACT_APP_ASSET_DOMAIN}/file/sekai-assets/character/trim_rip/chr_trim_${charaId}.webp`}
                ></CardMedia>
              </Card>
            </TabPanel>
            <TabPanel value="1" classes={{ root: classes.tabpanel }}>
              <Card
              // onClick={() => {
              //   setActiveIdx(0);
              //   setVisible(true);
              // }}
              >
                <CardMedia
                  classes={{ root: classes.nameLabel }}
                  image={`${process.env.REACT_APP_ASSET_DOMAIN}/file/sekai-assets/character/label_rip/chr_h_lb_${charaId}.webp`}
                ></CardMedia>
              </Card>
            </TabPanel>
            <TabPanel value="2" classes={{ root: classes.tabpanel }}>
              <Card
              // onClick={() => {
              //   setActiveIdx(0);
              //   setVisible(true);
              // }}
              >
                <CardMedia
                  classes={{ root: classes.nameVerticalLabel }}
                  image={`${process.env.REACT_APP_ASSET_DOMAIN}/file/sekai-assets/character/label_vertical_rip/chr_v_lb_${charaId}.webp`}
                ></CardMedia>
              </Card>
            </TabPanel>
          </Paper>
        </TabContext>
        <Grid className={classes["grid-out"]} container direction="column">
          <Grid
            container
            direction="row"
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
              {t("common:id")}
            </Typography>
            <Typography>{chara.id}</Typography>
          </Grid>
          <Divider style={{ margin: "1% 0" }} />
          <Grid
            container
            direction="row"
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
              {t("member:name")}
            </Typography>
            <Typography>{getCharaName(chara.id)}</Typography>
          </Grid>
          <Divider style={{ margin: "1% 0" }} />
          <Grid
            container
            direction="row"
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
              {t("member:hiragana")}
            </Typography>
            <Typography>
              {chara.firstNameRuby} {chara.givenNameRuby}
            </Typography>
          </Grid>
          <Divider style={{ margin: "1% 0" }} />
          <Grid
            container
            direction="row"
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
              {t("member:gender.caption")}
            </Typography>
            <Typography>
              {
                // for i18next-parser
                // t("member:gender.female")
                // t("member:gender.male")
                // t("member:gender.secret")
                t(`member:gender.${chara.gender}`)
              }
            </Typography>
          </Grid>
          <Divider style={{ margin: "1% 0" }} />
          <Grid
            container
            direction="row"
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
              {t("common:unit")}
            </Typography>
            <img
              className={classes["unit-logo-img"]}
              src={UnitOutlinedLogoMap[chara.unit]}
              alt={chara.unit}
            ></img>
          </Grid>
          <Divider style={{ margin: "1% 0" }} />
          {colorItems.map(({ caption, key }) =>
            charaUnit[key] ? (
              <Fragment key={"color-" + key}>
                <Grid
                  container
                  direction="row"
                  wrap="nowrap"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
                      {t(caption)}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={1}>
                      <Grid item>
                        <Typography>{charaUnit[key]}</Typography>
                      </Grid>
                      <Grid item>
                        <div
                          style={{
                            height: "26px",
                            width: "26px",
                            border: "solid 2px white",
                            backgroundColor: charaUnit[key],
                          }}
                        ></div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider style={{ margin: "1% 0" }} />
              </Fragment>
            ) : null
          )}
        </Grid>
      </Container>
      <Typography variant="h6" className={layoutClasses.header}>
        {t("common:profile")}
      </Typography>
      <Container className={layoutClasses.content} maxWidth="sm">
        <Grid className={classes["grid-out"]} container direction="column">
          {profileItems.map(({ caption, key }) =>
            charaProfile[key] ? (
              <Fragment key={"profile-" + key}>
                <Grid
                  container
                  direction="row"
                  wrap="nowrap"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item xs={2}>
                    <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
                      {t(caption)}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={8} container justify="flex-end">
                    <Typography style={{ textAlign: "justify" }}>
                      {charaProfile[key]}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider style={{ margin: "1% 0" }} />
              </Fragment>
            ) : null
          )}
        </Grid>
      </Container>
      {charaSupportUnits.length ? (
        <Fragment>
          <Typography variant="h6" className={layoutClasses.header}>
            {t("common:support_unit")}
          </Typography>
          <Container className={layoutClasses.content} maxWidth="sm">
            <Grid
              className={classes["grid-out"]}
              container
              direction="row"
              spacing={1}
            >
              {charaSupportUnits.map((csu) => (
                <Grid
                  key={"support-unit-" + csu.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  container
                  alignItems="center"
                  justify="center"
                >
                  <img
                    className={classes["unit-logo-img"]}
                    src={UnitOutlinedLogoMap[csu.unit]}
                    alt={csu.unit}
                  ></img>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Fragment>
      ) : null}
      <Typography variant="h6" className={layoutClasses.header}>
        {t("common:card")}
      </Typography>
      <Container className={layoutClasses.content} maxWidth="lg">
        <Grid
          className={classes["grid-out"]}
          container
          direction="row"
          spacing={1}
        >
          {charaCards.map((cc) => (
            <Grid key={"card-" + cc.id} item xs={4} sm={3} md={2} lg={1}>
              <Link to={"/card/" + cc.id} style={{ textDecoration: "none" }}>
                <CardThumb id={cc.id}></CardThumb>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Viewer
        visible={visible}
        onClose={() => setVisible(false)}
        images={[
          {
            src: `${process.env.REACT_APP_ASSET_DOMAIN}/file/sekai-assets/character/trim_rip/chr_trim_${charaId}.webp`,
            alt: t("member:tab.title[0]"),
          },
        ]}
        zIndex={2000}
        activeIndex={activeIdx}
        downloadable
        downloadInNewWindow
        onMaskClick={() => setVisible(false)}
        onChange={(_, idx) => setActiveIdx(idx)}
        zoomSpeed={0.25}
        noNavbar
      />
    </Fragment>
  ) : (
    <div>
      Loading... If you saw this for a while, member {charaId} does not exist.
    </div>
  );
};

export default MemberDetail;
