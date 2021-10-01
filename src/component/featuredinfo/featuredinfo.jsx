import React from 'react';
import './featuredinfo.css'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

export default function featuredinfo() {
    return (
        <div className="featured">
            <div className="featureditem">
                <span className="fraturedtitle">Revanue</span>
                <div className="reaturedmoneycontainer"><span className="featuredmoney">$3,289</span><span className="featuredmoneyrate">-11.4 <ArrowDownward className="featuredicon negative" /></span></div>
                <span className="featuredsub">Compared to last month</span>
            </div>
            <div className="featureditem">
                <span className="fraturedtitle">Sales</span>
                <div className="reaturedmoneycontainer"><span className="featuredmoney">$1,289</span><span className="featuredmoneyrate">-1.4 <ArrowDownward className="featuredicon negative" /></span></div>
                <span className="featuredsub">Compared to last month</span>
            </div>
            <div className="featureditem">
                <span className="fraturedtitle">Cost</span>
                <div className="reaturedmoneycontainer"><span className="featuredmoney">$3,290</span><span className="featuredmoneyrate">+21.4 <ArrowUpward className="featuredicon " /></span></div>
                <span className="featuredsub">Compared to last month</span>
            </div>

        </div>
    )
}
