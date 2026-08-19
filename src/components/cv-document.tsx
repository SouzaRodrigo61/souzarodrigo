import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer"
import type { CvData } from "@/data/cv"

// ATS: 1 coluna, Helvetica, sem foto/tabela/ícone, headings padrão, texto real.
// Sem hifenização — quebrar palavra no meio ("souzarodri-go") lê mal e parseia pior.
Font.registerHyphenationCallback((word) => [word])

const ACCENT = "#047857"
const INK = "#1c1c1e"
const MUTED = "#5b5b60"
const RULE = "#d8d8dc"

const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9.5,
    lineHeight: 1.35,
    color: INK,
    paddingTop: 42,
    paddingBottom: 46,
    paddingHorizontal: 48,
  },
  name: { fontSize: 22, fontFamily: "Helvetica-Bold", letterSpacing: 0.3, lineHeight: 1.15 },
  headline: { fontSize: 10.5, color: MUTED, marginTop: 4, lineHeight: 1.2 },
  contactLine: { fontSize: 8.5, color: MUTED, marginTop: 3 },
  headerRule: { borderBottomWidth: 1.5, borderBottomColor: INK, marginTop: 12 },

  section: { marginTop: 13 },
  sectionTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: ACCENT,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 6,
  },

  summary: {},

  skillRow: { flexDirection: "row", marginBottom: 2.5 },
  skillGroup: { fontFamily: "Helvetica-Bold", width: 96 },
  skillItems: { flex: 1, color: INK },

  exp: { marginBottom: 9 },
  expHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" },
  role: { fontFamily: "Helvetica-Bold", fontSize: 10.5 },
  period: { color: MUTED, fontSize: 8.5 },
  company: { color: MUTED, fontSize: 9.5, marginTop: 1, marginBottom: 3.5 },
  bulletRow: { flexDirection: "row", marginBottom: 2 },
  bulletDot: { width: 11, color: ACCENT },
  bulletText: { flex: 1 },

  project: { marginBottom: 6 },
  projectName: { fontFamily: "Helvetica-Bold", fontSize: 10 },
  projectDesc: { marginTop: 1 },
  projectLink: { color: MUTED },

  eduRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 3 },
})

export function CvDocument({ data }: { data: CvData }) {
  return (
    <Document title={`${data.name} — ${data.title}`} author={data.name} subject={data.title}>
      <Page size="A4" style={s.page}>
        {/* Cabeçalho */}
        <Text style={s.name}>{data.name}</Text>
        <Text style={s.headline}>{data.title}</Text>
        <Text style={s.contactLine}>{data.contacts.slice(0, 2).join("   •   ")}</Text>
        <Text style={s.contactLine}>{data.contacts.slice(2).join("   •   ")}</Text>
        <View style={s.headerRule} />

        {/* Resumo */}
        <View style={s.section}>
          <Text style={s.summary}>{data.summary}</Text>
        </View>

        {/* Skills primeiro: recrutador acha a stack em segundos */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>{data.sections.skills}</Text>
          {data.skills.map((sk) => (
            <View key={sk.group} style={s.skillRow}>
              <Text style={s.skillGroup}>{sk.group}</Text>
              <Text style={s.skillItems}>{sk.items}</Text>
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{data.sections.experience}</Text>
          {data.experiences.map((exp) => (
            <View key={exp.company + exp.period} style={s.exp} wrap={false}>
              <View style={s.expHeader}>
                <Text style={s.role}>{exp.role}</Text>
                <Text style={s.period}>{exp.period}</Text>
              </View>
              <Text style={s.company}>{exp.company}</Text>
              {exp.bullets.map((b, i) => (
                <View key={i} style={s.bulletRow}>
                  <Text style={s.bulletDot}>•</Text>
                  <Text style={s.bulletText}>{b}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{data.sections.projects}</Text>
          {data.projects.map((p) => (
            <View key={p.name} style={s.project} wrap={false}>
              <Text style={s.projectName}>{p.name}</Text>
              <Text style={s.projectDesc}>
                {p.description}
                {p.link ? <Text style={s.projectLink}>{`  ${p.link}`}</Text> : null}
              </Text>
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{data.sections.education}</Text>
          {data.education.map((e) => (
            <View key={e.title} style={s.eduRow}>
              <Text>
                <Text style={{ fontFamily: "Helvetica-Bold" }}>{e.title}</Text>
                {` — ${e.institution}`}
              </Text>
              <Text style={s.period}>{e.period}</Text>
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{data.sections.languages}</Text>
          <Text>{data.languages.join("   •   ")}</Text>
        </View>
      </Page>
    </Document>
  )
}
