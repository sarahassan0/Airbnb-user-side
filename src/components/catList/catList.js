import * as React from 'react';
import { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FeedIcon from '@mui/icons-material/Feed';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AccessibleIcon from '@mui/icons-material/Accessible';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import TempleBuddhistIcon from '@mui/icons-material/TempleBuddhist';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import LandslideIcon from '@mui/icons-material/Landslide';
import LightIcon from '@mui/icons-material/Light';
import PoolIcon from '@mui/icons-material/Pool';
import HouseIcon from '@mui/icons-material/House';
import '../header/header.css'
import { authContext } from '../../contexts/auth';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './catList.css'
import { GetCat } from '../../store/actions/getCat';
import { useEffect } from 'react';
import { filterContext } from '../../contexts/filtersModel';


const CatList = (props) => {


    const { t, i18n } = useTranslation();
    const { isAuth, setAuth } = useContext(authContext);

    const { showFilters, setShowFilters } = useContext(filterContext)


    const handleShowFilters = () => setShowFilters(true)


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value)
    };
    const dispatch = useDispatch()
    const catUnits = useSelector(state => state.cat)

    function getCatUnits(name) {
        console.log(catUnits);
        dispatch(GetCat(name))

    }

    return (
        <div className='container-fluid'>
            <div
                className="row flex items-center"
                dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
            >
                <hr />
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary."
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    className='sm:mx-2 md:mx-5 lg:mx-10 col-10'
                >
                    <Tab icon={<LandslideIcon />} label={t("Amazing views")} name="Amazing views" onClick={(e) => { getCatUnits(e.target.name) }} />
                    <Tab icon={<FeedIcon />} label={t('New')} name="New" onClick={(e) => { getCatUnits(e.target.name) }} />
                    <Tab icon={<FilterHdrIcon />} label={t("Top of the world")} name="Top of the world" onClick={(e) => { getCatUnits(e.target.name) }} />
                    <Tab icon={<WhatshotIcon />} label={t("Trending")} value="13" />
                    <Tab icon={<AccessibleIcon />} label={t("Adapted")} value="10" />
                    <Tab icon={<SportsHandballIcon />} label={t("Playing")} value="25" />
                    <Tab icon={<TempleBuddhistIcon />} label={t("Hankoks")} value="38" />
                    <Tab icon={<AirlineSeatIndividualSuiteIcon />} label={t("Private rooms")} value="19" />
                    <Tab icon={<LandslideIcon />} label={t("Amazing views")} value="161" />
                    <Tab icon={<LightIcon />} label={t("OMG!")} value="182" />
                    <Tab icon={<PoolIcon />} label={t("Amazing pools")} value="17" />
                    <Tab icon={<HouseIcon />} label={t("Tiny home")} value="87" />
                    <Tab icon={<LandslideIcon />} label={t("Amazing views")} value="52" />
                    <Tab icon={<LightIcon />} label={t("OMG!")} value="63" />
                    <Tab icon={<PoolIcon />} label={t("Amazing pools")} value="71" />
                    <Tab icon={<LightIcon />} label={t("OMG!")} value="141" />
                    <Tab icon={<PoolIcon />} label={t("Amazing pools")} value="589" />
                    <Tab icon={<HouseIcon />} label={t("Tiny home")} value="980" />
                    <Tab icon={<LandslideIcon />} label={t("Amazing views")} value="1200" />
                    <Tab icon={<LightIcon />} label={t("OMG!")} value="530" />
                    <Tab icon={<PoolIcon />} label={t("Amazing pools")} value="892" />
                    <Tab icon={<PoolIcon />} label={t("Amazing pools")} value="156" />
                    <Tab icon={<LandslideIcon />} label={t("Amazing views")} value="879" />
                    <Tab icon={<LightIcon />} label={t("OMG!")} value="564" />
                    <Tab icon={<PoolIcon />} label={t("Amazing pools")} value="796" />
                    <Tab icon={<HouseIcon />} label={t("Tiny home")} value="256" />
                    <Tab icon={<LandslideIcon />} label={t("Amazing views")} value="436" />
                    <Tab icon={<LightIcon />} label={t("OMG!")} value="452" />
                    <Tab icon={<PoolIcon />} label={t("Amazing pools")} value="784" />
                    <Tab icon={<PoolIcon />} label={t("Amazing pools")} value="256" />
                    <Tab icon={<LandslideIcon />} label={t("Amazing views")} value="203" />
                    <Tab icon={<LightIcon />} label={t("OMG!")} value="201" />
                    <Tab icon={<PoolIcon />} label={t("Amazing pools")} value="208" />
                    <Tab icon={<HouseIcon />} label={t("Tiny home")} value="210" />
                    <Tab icon={<LandslideIcon />} label={t("Amazing views")} value="202" />
                    <Tab icon={<LightIcon />} label={t("OMG!")} value="220" />
                    <Tab icon={<PoolIcon />} label={t("Amazing pools")} value="221" />
                </Tabs>
                <div className='col-1'>
                    <button className="btn btn-white lg:me-2 me-1 border" onClick={handleShowFilters}>
                        <div className='flex justify-around'>
                            <i className={`${i18n.language === 'en' ? "bi bi-sliders2-vertical me-2" : "bi bi-sliders2-vertical ms-1"}`}></i>
                            <h6>{t("Filter")}</h6>
                        </div>
                    </button>
                </div>
            </div >
        </div >
    );
};

export default CatList;