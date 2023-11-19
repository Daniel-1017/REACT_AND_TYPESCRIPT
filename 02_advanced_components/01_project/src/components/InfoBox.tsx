type HintBoxProps = {
  mode: "hint"
  children: React.ReactNode
}

type WarningBoxProps = {
  mode: "warning"
  severity: "low" | "medium" | "high"
  children: React.ReactNode
}

type InfoBoxProps = HintBoxProps | WarningBoxProps

const InfoBox = (props: InfoBoxProps) => {
  const { mode, children } = props

  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    )
  }

  const { severity } = props

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  )
}

export default InfoBox
