# Six Sigma Black Belt — Control Phase · 40 Questions with Answers

> Difficulty mix: 10 Easy · 16 Medium · 14 Hard

---

## Easy (Q1–Q10)

**Q1.** The primary goal of the Control phase is to:

- A. Identify root causes
- B. Design experiments
- **C. Sustain the improvement and prevent regression to the old process ✓**
- D. Define the project scope

> **Answer: C** — Control locks in gains by monitoring the process, documenting standard work, and establishing reaction plans if performance drifts.

---

**Q2.** A control plan is a document that:

- A. Lists all root causes found in Analyze
- **B. Specifies how key process variables will be monitored, measured, and reacted to ✓**
- C. Describes the DOE used to optimize the process
- D. Defines the project charter

> **Answer: B** — The control plan is a living document specifying process step, characteristic, specification, measurement method, sample plan, and reaction plan.

---

**Q3.** SPC stands for:

- A. Six Process Control
- **B. Statistical Process Control ✓**
- C. Standard Process Capability
- D. Sigma Process Calculation

> **Answer: B** — SPC uses control charts to monitor a process in real time and distinguish common-cause from special-cause variation.

---

**Q4.** A control chart signals an out-of-control condition when:

- A. All points are within 3-sigma limits
- **B. A point falls outside 3-sigma control limits or a run rule is violated ✓**
- C. Cpk > 1.33
- D. The sample size is too small

> **Answer: B** — Western Electric/Nelson run rules define out-of-control (special-cause) signals beyond simply exceeding 3-sigma limits.

---

**Q5.** Standard Operating Procedures (SOPs) are created during Control to:

- A. Document the DOE results
- **B. Ensure the improved process is performed consistently by all operators ✓**
- C. Calculate the new process sigma
- D. Replace the control plan

> **Answer: B** — SOPs standardize work instructions so the gains achieved in Improve are not lost due to inconsistent execution.

---

**Q6.** Which chart monitors individual measurements when subgroup size = 1?

- A. X-bar and R chart
- B. p-chart
- **C. I-MR chart ✓**
- D. c-chart

> **Answer: C** — I-MR (Individuals and Moving Range) chart is used when only one measurement is taken per time period.

---

**Q7.** A reaction plan in a control plan specifies:

- A. The DOE factor settings
- **B. What action to take when a process variable goes out of control ✓**
- C. The original project charter goals
- D. The Gauge R&R results

> **Answer: B** — Reaction plans give operators clear, predefined steps to take (stop, adjust, escalate) when a control chart signals a special cause.

---

**Q8.** Process documentation handoff to the process owner occurs:

- A. At the start of Define
- B. During Measure
- **C. At the end of the Control phase ✓**
- D. During the Improve pilot

> **Answer: C** — At project closure, ownership transfers from the Black Belt/project team to the process owner, who sustains the gains long-term.

---

**Q9.** Visual management boards in the Control phase help:

- A. Calculate Cpk automatically
- **B. Make process performance visible to operators and supervisors in real time ✓**
- C. Replace the need for control charts
- D. Set new specification limits

> **Answer: B** — Visual boards (andon, performance dashboards) provide at-a-glance status, supporting quick response to abnormalities.

---

**Q10.** A "lessons learned" document at project closure captures:

- A. Only financial results
- **B. What worked well, what didn't, and recommendations for future projects ✓**
- C. The original problem statement only
- D. The control chart data exclusively

> **Answer: B** — Lessons learned support organizational learning, helping future Six Sigma teams avoid repeated mistakes and replicate successes.

---

## Medium (Q11–Q26)

**Q11.** Which control chart is appropriate for monitoring count of defects per unit when sample size varies?

- A. c-chart
- **B. u-chart ✓**
- C. p-chart
- D. np-chart

> **Answer: B** — u-chart = defects per unit, used when unit size (area of opportunity) varies. c-chart requires constant sample size.

---

**Q12.** An np-chart differs from a p-chart in that it plots:

- A. The proportion defective
- **B. The actual number (count) defective, requiring constant sample size ✓**
- C. The number of defects per unit
- D. Individual measurements

> **Answer: B** — np-chart plots the count of defectives (not proportion), and requires constant subgroup size n, unlike the p-chart which can handle varying n.

---

**Q13.** Control limits on a control chart are typically set at:

- A. ±1 standard deviation from the mean
- B. ±2 standard deviations from the mean
- **C. ±3 standard deviations from the mean ✓**
- D. The specification limits

> **Answer: C** — 3-sigma limits balance the risk of false alarms (Type I) against missed signals (Type II) for normally distributed data, capturing ~99.73% of common-cause variation.

---

**Q14.** Control limits should NEVER be confused with:

- A. The centerline
- **B. Specification limits (customer requirements) ✓**
- C. The standard deviation
- D. The subgroup size

> **Answer: B** — Control limits reflect the voice of the process (statistical variation); specification limits reflect the voice of the customer (requirements). They are calculated independently and often differ.

---

**Q15.** A process is "capable" but not "in control" when:

- A. Cpk > 1.33 and the control chart shows no special causes
- **B. Cpk meets the target, but special-cause variation is present on the control chart ✓**
- C. Cpk < 1.0 and the process is stable
- D. This combination is statistically impossible

> **Answer: B** — Capability and control are independent concepts. A process can produce acceptable output on average (good Cpk) while still showing unpredictable special-cause signals that threaten future performance.

---

**Q16.** Which of the following is a Nelson/Western Electric run rule indicating a special cause?

- A. 2 consecutive points within 1-sigma of the mean
- **B. 8 (or 9) consecutive points on the same side of the centerline ✓**
- C. 3 random points scattered throughout the chart
- D. 1 point exactly on the centerline

> **Answer: B** — Common run rules: 1 point beyond 3σ; 9 points on one side; 6 points trending; 14 points alternating up/down; 2 of 3 points beyond 2σ on the same side.

---

**Q17.** Mistake-proofing (poka-yoke) is preferred over inspection-based control because:

- A. It is always cheaper to implement
- **B. It prevents or immediately detects errors at the source rather than relying on downstream inspection ✓**
- C. It eliminates the need for control charts
- D. It requires no operator training

> **Answer: B** — Prevention at the source is more reliable and cost-effective than catching defects later, consistent with the Lean principle of "stop the line" / jidoka.

---

**Q18.** A control chart for a process with naturally non-normal data (e.g., highly skewed cycle times) should:

- A. Always use standard X-bar/R control limits regardless of distribution
- **B. Consider a transformation or use a chart appropriate for the underlying distribution ✓**
- C. Be abandoned in favor of a histogram only
- D. Use specification limits as control limits

> **Answer: B** — For skewed data (e.g., cycle time, often lognormal), use a Box-Cox or other transformation before applying standard control charts, or use charts designed for the specific distribution.

---

**Q19.** An audit plan in the Control phase is used to:

- A. Replace the control chart
- **B. Periodically verify the process is following the SOP and control plan ✓**
- C. Recalculate process sigma
- D. Conduct a new Gauge R&R study

> **Answer: B** — Periodic audits ensure long-term sustainment by confirming operators continue to follow standardized procedures, catching drift before it becomes a major issue.

---

**Q20.** The "voice of the process" (control limits) versus "voice of the customer" (spec limits) comparison is best visualized using:

- A. A Pareto chart
- **B. A process capability histogram overlaying spec limits on the data distribution ✓**
- C. A SIPOC diagram
- D. An Ishikawa diagram

> **Answer: B** — A capability histogram with USL/LSL overlaid shows visually whether the natural process spread (voice of process) fits within customer requirements (voice of customer).

---

**Q21.** Which of these is the correct order of priority for control strategies (from most to least robust)?

- **A. Eliminate the opportunity for error (poka-yoke) → Automated control → Operator control with SOP → Inspection ✓**
- B. Inspection → SOP → Automated control → Poka-yoke
- C. SOP → Inspection → Poka-yoke → Automated control
- D. Automated control → SOP → Inspection → Poka-yoke

> **Answer: A** — The control hierarchy favors prevention at the source (poka-yoke), followed by automation, then standard work with training, with inspection as the least reliable (last line of defense).

---

**Q22.** A process owner's responsibility after project closure includes:

- A. Conducting new DOEs to further optimize the process
- **B. Maintaining the control plan, monitoring SPC charts, and executing reaction plans ✓**
- C. Re-writing the project charter annually
- D. Re-validating the Gauge R&R every week

> **Answer: B** — The process owner sustains daily operations using the tools and documentation handed off by the project team, ensuring gains persist after the Black Belt moves to other projects.

---

**Q23.** A short-run SPC chart (e.g., Z-chart or DNOM chart) is used when:

- A. Subgroup sizes are very large
- **B. Multiple part types/products are produced in small batches on the same process ✓**
- C. Only attribute data is collected
- D. The process has zero variation

> **Answer: B** — Short-run charts standardize data across different part numbers (with different nominal targets) onto a common scale so a single chart can monitor multiple low-volume products.

---

**Q24.** EWMA (Exponentially Weighted Moving Average) charts are particularly useful for:

- A. Detecting large, sudden shifts only
- **B. Detecting small, gradual shifts in the process mean ✓**
- C. Monitoring attribute data exclusively
- D. Replacing the need for control limits

> **Answer: B** — EWMA charts weight recent data more heavily, making them more sensitive to small sustained shifts than standard Shewhart charts, which excel at detecting large shifts.

---

**Q25.** A CUSUM (Cumulative Sum) chart is designed to:

- A. Detect only large shifts immediately
- **B. Accumulate deviations from target over time to detect small sustained shifts quickly ✓**
- C. Replace the need for a control plan
- D. Monitor only categorical data

> **Answer: B** — CUSUM charts plot the cumulative sum of deviations from a target value, making them very sensitive to small, persistent shifts that a standard Shewhart chart might miss.

---

**Q26.** Which factor most influences the selection between an X-bar/R chart and an X-bar/S chart?

- **A. Subgroup size (R chart for n ≤ 10, S chart preferred for n > 10) ✓**
- B. Whether the data is attribute or continuous
- C. The number of shifts per day
- D. Whether the process is automated or manual

> **Answer: A** — The Range (R) is a reasonably efficient estimator of variation for small subgroups (n ≤ 10). For larger subgroups, the Standard Deviation (S) chart is statistically more efficient.

---

## Hard (Q27–Q40)

**Q27.** A process with Cpk = 1.50 begins showing a single point beyond the 3-sigma control limit. The correct interpretation is:

- A. The process is still capable, so no action is needed
- **B. A special cause has occurred and must be investigated regardless of current capability ✓**
- C. The control limits should be recalculated to include this point
- D. This is expected common-cause variation given the high Cpk

> **Answer: B** — Capability (Cpk) reflects average long-term performance, but a single 3-sigma signal indicates a real-time special cause requiring root-cause investigation, even if overall capability remains good.

---

**Q28.** For an EWMA chart with weighting factor λ = 0.2, a larger λ value would:

- A. Make the chart more sensitive to small shifts and less sensitive to large shifts
- **B. Make the chart behave more like a standard Shewhart chart (sensitive to large shifts) ✓**
- C. Eliminate the need for control limits
- D. Have no effect on chart sensitivity

> **Answer: B** — As λ approaches 1, the EWMA chart converges to a standard Shewhart chart (high weight on the most recent observation = sensitive to large/sudden shifts). Smaller λ smooths more and is better at detecting small sustained shifts.

---

**Q29.** A control plan specifies a reaction plan: "If 2 consecutive points exceed UCL, stop production and notify supervisor." This reaction plan is based on:

- A. The specification limits only
- **B. A statistical run rule indicating non-random (special cause) variation ✓**
- C. The process Cpk value
- D. The Gauge R&R study results

> **Answer: B** — This reaction trigger is derived from SPC run rules (e.g., 2 of 3 points beyond 2-sigma, or 2 consecutive points beyond 3-sigma), which statistically indicate a process shift unlikely to occur by chance alone.

---

**Q30.** A process is monitored using an X-bar/R chart with subgroup n=5. The average range R̄ = 4.2. Using the constant d₂ = 2.326 for n=5, the estimated process σ is:

- **A. 1.81 ✓**
- B. 2.33
- C. 4.20
- D. 0.93

> **Answer: A** — σ̂ = R̄ / d₂ = 4.2 / 2.326 ≈ **1.81**. This formula estimates short-term process standard deviation from the average range.

---

**Q31.** When transitioning a project to the process owner, which document is MOST critical for long-term sustainment?

- A. The original project charter
- **B. The control plan, including SOPs, control charts, and reaction plans ✓**
- C. The DOE summary report
- D. The financial benefits validation report

> **Answer: B** — The control plan is the operational document that the process owner uses daily to sustain performance — it consolidates monitoring methods, specifications, and response protocols.

---

**Q32.** A process exhibits a cyclical pattern on its control chart (alternating high-low every other point). This pattern most likely indicates:

- A. Random common-cause variation
- **B. A systematic assignable cause, such as alternating shifts, machines, or raw material lots ✓**
- C. The control limits are set too wide
- D. The data should be transformed using Box-Cox

> **Answer: B** — Cyclical patterns are a classic Nelson rule violation (14 points alternating up and down) suggesting a systematic, rotating cause — e.g., two operators or two machines alternately feeding the same process stream.

---

**Q33.** A team replaces manual data collection with an automated sensor for SPC. Before trusting the new data source, they should:

- A. Assume the sensor is accurate since it's automated
- **B. Conduct a new Gauge R&R / MSA study on the automated system before using it for control ✓**
- C. Use the sensor data only for trending, never for control limits
- D. Recalculate Cpk using the old manual data

> **Answer: B** — Any new measurement system — automated or manual — must be validated via Gauge R&R/MSA before being trusted as the basis for SPC and control decisions.

---

**Q34.** A process owner notices the control chart has been "in control" with no signals for 200 consecutive subgroups, despite known process improvements being made informally by operators. The most likely issue is:

- A. The process truly has zero variation
- **B. Control limits were not recalculated after the process changed, masking new performance levels ✓**
- C. The chart type is incorrect for this data
- D. The reaction plan is too aggressive

> **Answer: B** — Control limits should be recalculated whenever a verified, intentional process change occurs (e.g., post-Improve baseline reset). Static limits from before the change can mask whether the new process is actually better or just appears stable.

---

**Q35.** A short-term Cpk of 1.67 (6σ quality) drops to a long-term Ppk of 1.17 over time. This shift is best explained by:

- **A. The standard 1.5-sigma long-term process shift commonly observed between short-term and long-term studies ✓**
- B. A measurement system error
- C. An error in the original DOE
- D. Incorrect control chart selection

> **Answer: A** — The well-known empirical 1.5σ shift accounts for typical long-term drift (tool wear, material lot changes, seasonal effects) not captured in short-term capability studies. Cpk (short-term) minus the shift approximates Ppk (long-term).

---

**Q36.** In a Control plan, "sample size" and "sampling frequency" for a critical characteristic should be determined by:

- A. Operator convenience
- **B. The risk of the characteristic (severity if it fails) and the process's demonstrated stability ✓**
- C. The original DOE replication count
- D. The Six Sigma certification level of the Black Belt

> **Answer: B** — Higher-risk characteristics (high severity, history of instability) warrant more frequent/larger sampling. Stable, low-risk characteristics can be sampled less frequently, balancing cost against risk.

---

**Q37.** A multivariate control chart (e.g., Hotelling's T²) is preferred over multiple individual control charts when:

- A. Only one variable needs monitoring
- **B. Several correlated variables must be monitored jointly, since individual charts can miss out-of-control conditions caused by their combined relationship ✓**
- C. The data is purely attribute
- D. Sample sizes are very small (n=1)

> **Answer: B** — When variables are correlated, individual univariate charts may each appear "in control" while the joint relationship between them has shifted. T² charts detect this multivariate special cause.

---

**Q38.** A control chart shows a process is stable and capable for 6 months. The Black Belt recommends closing the project. The BEST argument FOR continued monitoring (vs. immediate closure) is:

- A. Capable processes never need monitoring
- **B. Special causes can emerge from new suppliers, equipment wear, or staff turnover even after a process is initially stabilized ✓**
- C. The original charter requires indefinite Black Belt involvement
- D. Closing slows down financial benefit realization

> **Answer: B** — Sustained control requires ongoing vigilance because new sources of variation can enter the system over time. The Black Belt closes their active involvement, but SPC monitoring by the process owner continues indefinitely.

---

**Q39.** When a reaction plan calls for "100% inspection until the process demonstrates 20 consecutive in-control subgroups," this approach is an example of:

- A. A permanent inspection-based control strategy
- **B. A temporary containment action while the root cause of the special cause is investigated and resolved ✓**
- C. Replacing SPC with inspection entirely
- D. An acceptable long-term Control phase strategy on its own

> **Answer: B** — 100% inspection is a containment action (similar to an 8D "interim containment") used temporarily after an out-of-control signal, while the team investigates and corrects the root cause — not a permanent control method.

---

**Q40.** The ultimate measure of success for the Control phase is:

- A. A perfectly drawn control chart with zero out-of-control points ever recorded
- **B. Sustained process performance at the improved level over time, verified through ongoing data and audits ✓**
- C. The number of SOPs created
- D. Achieving exactly Six Sigma (3.4 DPMO) regardless of the original goal

> **Answer: B** — Success is measured by durable performance — the gains achieved in Improve persist over months/years, confirmed by ongoing SPC data, periodic audits, and financial tracking — not by the absence of any signals (which would actually be statistically suspicious) or by hitting an arbitrary universal target.

---

## Answer Key

| # | Ans | Topic |
|---|-----|-------|
| 1 | C | Control phase goal |
| 2 | B | Control plan purpose |
| 3 | B | SPC definition |
| 4 | B | OOC signal |
| 5 | B | SOPs purpose |
| 6 | C | I-MR chart |
| 7 | B | Reaction plan |
| 8 | C | Process owner handoff |
| 9 | B | Visual management |
| 10 | B | Lessons learned |
| 11 | B | u-chart |
| 12 | B | np-chart |
| 13 | C | 3-sigma control limits |
| 14 | B | Control vs. spec limits |
| 15 | B | Capable but not in control |
| 16 | B | Nelson run rule |
| 17 | B | Poka-yoke vs. inspection |
| 18 | B | Non-normal data charting |
| 19 | B | Audit plan |
| 20 | B | Voice of process vs. customer |
| 21 | A | Control strategy hierarchy |
| 22 | B | Process owner responsibility |
| 23 | B | Short-run SPC |
| 24 | B | EWMA chart |
| 25 | B | CUSUM chart |
| 26 | A | X-bar/R vs. X-bar/S |
| 27 | B | Special cause despite high Cpk |
| 28 | B | EWMA λ sensitivity |
| 29 | B | Reaction plan basis |
| 30 | A | σ̂ from R̄/d₂ |
| 31 | B | Critical handoff document |
| 32 | B | Cyclical pattern cause |
| 33 | B | New sensor MSA validation |
| 34 | B | Stale control limits |
| 35 | A | 1.5σ shift (Cpk vs Ppk) |
| 36 | B | Sample size/frequency basis |
| 37 | B | Multivariate (T²) charts |
| 38 | B | Ongoing monitoring rationale |
| 39 | B | 100% inspection as containment |
| 40 | B | Control phase success measure |
