package com.jiumi.baseconfig.domain;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.jiumi.common.annotation.Excel;
import com.jiumi.common.core.domain.BaseEntity;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * 轮播图对象 base_banner
 *
 * @author jiumi
 * @date 2021-09-08
 */
public class BaseBanner extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 轮播ID */
    private String id;

    /** 标题 */
    @Excel(name = "标题")
    private String bannerName;

    /** banner类别 */
    @Excel(name = "banner类别")
    private String bannerCategory;

    /** 图片路径 */
    @Excel(name = "图片路径")
    private String imgUrl;

    /** banner跳转路径 */
    @Excel(name = "banner跳转路径")
    private String linkUrl;

    /** 排序 */
    @Excel(name = "排序")
    private Long sortNum;

    /** 修改时间 */
    private Date updateDate;

    /** 上传时间 */
    private Date createDate;

    public void setId(String id)
    {
        this.id = id;
    }

    public String getId()
    {
        return id;
    }
    public void setBannerName(String bannerName)
    {
        this.bannerName = bannerName;
    }

    public String getBannerName()
    {
        return bannerName;
    }
    public void setBannerCategory(String bannerCategory)
    {
        this.bannerCategory = bannerCategory;
    }

    public String getBannerCategory()
    {
        return bannerCategory;
    }
    public void setImgUrl(String imgUrl)
    {
        this.imgUrl = imgUrl;
    }

    public String getImgUrl()
    {
        return imgUrl;
    }
    public void setLinkUrl(String linkUrl)
    {
        this.linkUrl = linkUrl;
    }

    public String getLinkUrl()
    {
        return linkUrl;
    }
    public void setSortNum(Long sortNum)
    {
        this.sortNum = sortNum;
    }

    public Long getSortNum()
    {
        return sortNum;
    }
    public void setUpdateDate(Date updateDate)
    {
        this.updateDate = updateDate;
    }

    public Date getUpdateDate()
    {
        return updateDate;
    }
    public void setCreateDate(Date createDate)
    {
        this.createDate = createDate;
    }

    public Date getCreateDate()
    {
        return createDate;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("bannerName", getBannerName())
            .append("bannerCategory", getBannerCategory())
            .append("imgUrl", getImgUrl())
            .append("linkUrl", getLinkUrl())
            .append("sortNum", getSortNum())
            .append("updateDate", getUpdateDate())
            .append("createDate", getCreateDate())
            .toString();
    }
}
