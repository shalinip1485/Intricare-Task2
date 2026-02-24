import { useState } from "react"

const tabs = [
  { id: "crm-enrichment", label: "CRM Data Enrichment", icon: "🗃️" },
  { id: "crm-sync", label: "CRM Data Sync", icon: "🔄" },
  { id: "bulk-export", label: "Bulk Export & Enrichment", icon: "📦" },
  { id: "ai-productivity", label: "AI Productivity", icon: "🤖" },
]

const tabContent = [
  {
    tagText: "Incomplete Data",
    tagClass: "tag-pink",
    subtitle: "It's hard to find the accurate contact data for every prospects by",
    leftTitle: "Here is how LeadCRM tackles",
    leftTitleBold: "that situation.",
    leftLink: "Try LeadCRM Data Enrichment",
    rightIntro: "If it does not works for you ! try our",
    rightLink: "Advanced Waterfall Enrichment",
    leftCards: [
      { title: "", image: "/features-left-img.svg" },
    ],
    rightImage: "/Features-Right-Img.svg",
  },
  {
    tagText: "Manual Entry",
    tagClass: "tag-blue",
    subtitle: "Manually syncing data to your CRM wastes hours every week by",
    leftTitle: "Here is how LeadCRM automates",
    leftTitleBold: "your CRM sync.",
    leftLink: "Try LeadCRM Data Sync",
    rightIntro: "Need real-time updates? Check out our",
    rightLink: "Live CRM Sync Engine",
    leftCards: [
      { title: "Auto CRM Mapping", image: "/feature-mapping.png" },
      { title: "Field Customization", image: "/feature-fields.png" },
    ],
    rightImage: "/feature-sync-flow.png",
  },
  {
    tagText: "Slow Exports",
    tagClass: "tag-green",
    subtitle: "Exporting large prospect lists is time-consuming and error-prone by",
    leftTitle: "Here is how LeadCRM supercharges",
    leftTitleBold: "bulk exports.",
    leftLink: "Try Bulk Export & Enrichment",
    rightIntro: "Need even more scale? Explore our",
    rightLink: "Enterprise Export Pipeline",
    leftCards: [
      { title: "One-Click Export", image: "/feature-export.png" },
      { title: "Enriched CSV Output", image: "/feature-csv.png" },
    ],
    rightImage: "/feature-pipeline.png",
  },
  {
    tagText: "Missed Follow-ups",
    tagClass: "tag-purple",
    subtitle: "Sales reps miss follow-ups and insights without AI assistance by",
    leftTitle: "Here is how LeadCRM's AI transforms",
    leftTitleBold: "your productivity.",
    leftLink: "Try AI Productivity Features",
    rightIntro: "Want smarter outreach? Discover our",
    rightLink: "AI-Powered Sequence Builder",
    leftCards: [
      { title: "AI Follow-up Suggestions", image: "/feature-ai.png" },
      { title: "Smart Inbox Insights", image: "/feature-inbox.png" },
    ],
    rightImage: "/feature-sequence.png",
  },
]

const Features = () => {
  const [activeTab, setActiveTab] = useState(0)
  const content = tabContent[activeTab]

  return (
    <div className="features-section">
      <div className="container">


        <div className="features-header">
          <h2 className="features-title">Complete LinkedIn Sales Solutions</h2>
          <p className="features-subtitle">Everything you need for professional LinkedIn prospecting</p>
        </div>


        <div className="features-tabs">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              className={`tab-btn${activeTab === i ? " active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              <span className="tab-icon">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>


        <div className="problem-row">
          <span className="problem-text">{content.subtitle}</span>
          <span className={`problem-tag ${content.tagClass}`}>{content.tagText}</span>
        </div>


        <div className="features-grid">


          <div className="features-panel">
            <p className="panel-heading">
              {content.leftTitle} <strong>{content.leftTitleBold}</strong>
            </p>
            <a className="panel-link">{content.leftLink} &rsaquo;</a>

            <div className="mt-auto pt-4">
              {content.leftCards && content.leftCards.length > 0 && (
                <img
                  src={content.leftCards[0].image}
                  alt="Feature"
                  className="w-100 h-auto rounded-4"
                />
              )}
            </div>
          </div>


          <div className="features-panel">
            <p className="panel-heading">
              {content.rightIntro}{" "}
              <strong className="panel-heading-link">{content.rightLink} &rsaquo;</strong>
            </p>

            <div className="panel-right-image-wrap">
              <img src={content.rightImage} alt={content.rightLink} className="panel-right-image" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Features