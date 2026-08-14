# Six Sigma Black Belt — Improve & Control Phases · 40 Questions with Answers

> Difficulty mix: 10 Easy · 16 Medium · 14 Hard

---

## Easy (Q1–Q10)

**Q1.** The primary objective of the Improve phase in DMAIC is to:

- A. Validate the measurement system
- **B. Develop, implement, and verify solutions that address confirmed root causes ✓**
- C. Standardize the daily operational controls
- D. Map the high-level SIPOC process

> **Answer: B** — Improve focuses on designing solutions for the key inputs ($X$s) identified during Analyze and demonstrating measurable performance gains in $Y$.

---

**Q2.** DOE stands for:

- A. Design of Execution
- B. Distribution of Errors
- **C. Design of Experiments ✓**
- D. Development of Control Evidence

> **Answer: C** — Design of Experiments (DOE) is a structured statistical method used to simultaneously manipulate multiple input factors ($X$s) to evaluate their effects on a response ($Y$).

---

**Q3.** The primary objective of the Control phase in DMAIC is to:

- A. Determine root causes of variation
- B. Pilot-test potential improvements
- **C. Sustain process gains by standardizing changes and monitoring performance ✓**
- D. Define project charter goals and scope

> **Answer: C** — Control ensures that process improvements are institutionalized, documented, and monitored so that performance does not degrade over time.

---

**Q4.** A Poka-Yoke is a Japanese term for a mechanism that:

- A. Calculates process standard deviation
- **B. Prevents errors from occurring or makes mistakes immediately obvious (Mistake-proofing) ✓**
- C. Ranks defect causes from highest to lowest
- D. Measures human operator efficiency

> **Answer: B** — Poka-Yoke refers to mistake-proofing devices or software checks designed to prevent human or mechanical errors before they result in defects.

---

**Q5.** Which Lean tool focuses on maintaining a clean, organized, and standardized workplace?

- A. Kanban
- **B. 5S ✓**
- C. Kaizen Blitz
- D. SMED

> **Answer: B** — 5S stands for Sort, Set in Order, Shine, Standardize, and Sustain, serving as the foundational Lean workplace organization system.

---

**Q6.** The upper and lower limits drawn on a Statistical Process Control (SPC) chart are known as:

- A. Specification Limits (USL / LSL)
- **B. Control Limits (UCL / LCL) ✓**
- C. Customer Tolerance Limits
- D. Process Capability Margins

> **Answer: B** — Control limits ($\pm 3\sigma$ from the center line) are calculated from process data to reflect natural process variation, distinct from customer specification limits.

---

**Q7.** Kanban is a Lean system used to:

- A. Test for equal variances between groups
- **B. Regulate workflow using visual pull signals to avoid overproduction ✓**
- C. Reduce machine setup time below 10 minutes
- D. Calculate short-term process capability

> **Answer: B** — Kanban uses visual signals (cards, bins, or digital alerts) to pull work through a process only when downstream capacity is available.

---

**Q8.** In a Control Plan, who is primarily responsible for the day-to-day execution of monitoring controls after project handoff?

- A. Black Belt
- B. Project Champion / Sponsor
- **C. Process Owner and Operational Team ✓**
- D. External Auditor

> **Answer: C** — Once the Improve/Control phases conclude, ownership of the Control Plan transitions permanently from the Black Belt to the Process Owner and operating team.

---

**Q9.** SMED (Single-Minute Exchange of Die) is a technique aimed at reducing:

- A. Measurement system bias
- **B. Equipment setup and changeover time ✓**
- C. Defect opportunity counts
- D. Type I error rates

> **Answer: B** — SMED converts internal setup steps (done while machine is stopped) to external setup steps (done while machine runs) to achieve changeover times under 10 minutes.

---

**Q10.** Standard Operating Procedures (SOPs) belong to which DMAIC phase deliverable?

- A. Measure
- B. Analyze
- C. Improve
- **D. Control ✓**
- D. Control

> **Answer: D** — SOPs document standardized work instructions during Control to prevent operators from drifting back to old habits.

---

## Medium (Q11–Q26)

**Q11.** In Design of Experiments (DOE), a "Main Effect" refers to:

- **A. The average change in response $Y$ produced by shifting a single factor $X$ from its low level to its high level ✓**
- B. The joint impact of two factors changing simultaneously
- C. The variation explained by residual random noise
- D. The difference between short-term and long-term sigma

> **Answer: A** — A main effect quantifies the direct impact of one independent variable on the response, averaged across all levels of other factors.

---

**Q12.** An "Interaction Effect" in a two-factor DOE occurs when:

- A. Both factors have identical main effects
- **B. The effect of Factor A on the response depends on the level setting of Factor B ✓**
- C. The response $Y$ is completely non-normally distributed
- D. Residuals exhibit constant variance across run order

> **Answer: B** — An interaction means factors do not act independently; the response slope for Factor A changes depending on whether Factor B is at its low or high setting.

---

**Q13.** A $2^3$ full factorial experimental design requires how many unique run combinations (excluding center points)?

- A. 6
- **B. 8 ✓**
- C. 9
- D. 16

> **Answer: B** — For a $2^k$ factorial design where $k = 3$ factors at 2 levels each, total runs $= 2^3 = 8$.

---

**Q14.** Adding "Center Points" to a two-level ($2^k$) factorial DOE enables the experimenter to detect:

- A. Measurement system reproducibility error
- **B. Non-linear response behavior (Curvature in the process model) ✓**
- C. Multicollinearity among factors
- D. Attribute defect opportunities

> **Answer: B** — Center points (runs with all continuous factors set midway between low and high) allow testing for overall response curvature between $2^k$ corner points.

---

**Q15.** Which Control Chart is most appropriate for monitoring continuous individual measurements ($n = 1$) over time?

- A. $\bar{X}$-$R$ Chart
- B. $p$-Chart
- **C. I-MR (Individual-Moving Range) Chart ✓**
- D. $u$-Chart

> **Answer: C** — The I-MR chart tracks continuous process data collected as single observations ($n=1$), using moving ranges between consecutive points to estimate variation.

---

**Q16.** Which Control Chart monitors the proportion of defective items (binary attribute data) when subgroup sample sizes vary?

- **A. $p$-Chart ✓**
- B. $np$-Chart
- C. $c$-Chart
- D. $u$-Chart

> **Answer: A** — $p$-Charts plot defective proportions ($d/n$) and accommodate varying subgroup sample sizes by adjusting control limits accordingly.

---

**Q17.** Which Control Chart monitors the total count of defects per unit (DPU) when the inspection unit area/size varies?

- A. $c$-Chart
- **B. $u$-Chart ✓**
- C. $p$-Chart
- D. $\bar{X}$-$S$ Chart

> **Answer: B** — $u$-Charts track defect counts per unit area of opportunity ($c/n$), supporting variable subgroup sizes, unlike $c$-charts which require constant subgroup size.

---

**Q18.** A Western Electric Rule violation indicating an out-of-control condition is triggered on a control chart when:

- A. 1 point falls within Zone C ($\pm 1\sigma$)
- **B. 1 point falls beyond Zone A ($> 3\sigma$ from center line) ✓**
- C. 4 out of 5 consecutive points land inside Zone C
- D. Points alternate randomly above and below the center line

> **Answer: B** — Any single point plotted outside 3-sigma control limits represents a primary special cause alarm under standard SPC control rules.

---

**Q19.** What is the primary purpose of conducting a "Pilot Test" during the Improve phase?

- A. Calculate final $P_p$ and $P_{pk}$ indices
- **B. Test solution performance and uncover unexpected side effects on a small scale before full deployment ✓**
- C. Replace the need for a Control Plan
- D. Establish baseline measurement stability

> **Answer: B** — Piloting tests solutions in a controlled, limited scope to validate effectiveness, refine execution, and minimize operational risk prior to full-scale launch.

---

**Q20.** In a Full Factorial DOE vs. Fractional Factorial DOE, fractional designs are selected primarily to:

- A. Increase statistical power for 3-way interactions
- **B. Reduce experimental runs and costs when screening many potential factors ($X$s) ✓**
- C. Eliminate the need for randomization
- D. Guarantee zero aliasing between factors

> **Answer: B** — Fractional factorial designs ($2^{k-p}$) test a fraction of total combinations, drastically reducing run counts during early screening phases.

---

**Q21.** "Aliasing" (or Confounding) in fractional factorial designs means that:

- A. Factor effects are tested across multiple shifts
- **B. Certain main effects or interactions are mathematically combined and cannot be separated from one another ✓**
- C. Measurement gauge error exceeds $30\%$
- D. Data points are non-normally distributed

> **Answer: B** — Aliasing occurs when fractional runs cause two or more effect estimates (e.g., Main Effect A and Interaction BC) to be confounded in the same contrast.

---

**Q22.** A $c$-Chart is used to monitor attribute data when:

- **A. Tracking total defect counts from constant subgroup sample sizes ✓**
- B. Tracking proportion of defective units with varying sample sizes
- C. Tracking continuous dimensional measurements with $n = 5$
- D. Tracking mean time between failures

> **Answer: A** — $c$-Charts model Poisson counts of defects occurring within a strictly constant unit or area of opportunity.

---

**Q23.** Which SPC chart is best suited for continuous data when subgroup sample size $n > 10$?

- A. $\bar{X}$-$R$ Chart
- **B. $\bar{X}$-$S$ Chart ✓**
- C. I-MR Chart
- D. $np$-Chart

> **Answer: B** — When subgroup sizes exceed 10, the sample standard deviation ($S$) becomes a significantly more efficient estimator of subgroup variation than sample range ($R$).

---

**Q24.** In Lean methodology, "Takt Time" is calculated as:

- **A. Available Net Operating Time / Customer Demand Volume ✓**
- B. Total Process Cycle Time / Number of Operators
- C. Machine Value-Add Time / Total Lead Time
- D. Total Production Volume / Shift Length

> **Answer: A** — Takt time represents the precise pace at which a process must produce outputs to meet customer demand rate ($T = \text{Time}_{\text{available}} / \text{Demand}$).

---

**Q25.** A process monitoring chart exhibits 9 consecutive points on one side of the center line. This indicates:

- A. Common cause random variation
- **B. A statistically significant process mean shift (Special Cause) ✓**
- C. Increasing measurement system error
- D. Process capability $C_p > 2.0$

> **Answer: B** — Under standard SPC rules (e.g., Western Electric / Nelson rules), 9 consecutive points on one side of the mean signals a non-random special cause shift.

---

**Q26.** Out-of-Control Action Plans (OCAP) in the Control phase outline:

- A. Project charter resource approval steps
- **B. Specific step-by-step instructions for operators when an SPC special cause alarm is triggered ✓**
- C. Regression equations for DOE models
- D. Financial ROI accounting methods

> **Answer: B** — An OCAP directs shop-floor personnel on immediate containment, diagnostic, and corrective actions to take when an out-of-control condition occurs.

---

## Hard (Q27–Q40)

**Q27.** A $2^{5-1}$ fractional factorial design has a Resolution IV. What does Resolution IV signify regarding aliasing?

- A. Main effects are aliased with other main effects
- **B. Main effects are unconfounded with 2-factor interactions, but 2-factor interactions are aliased with other 2-factor interactions ✓**
- C. All 2-factor interactions are completely unconfounded
- D. Main effects are aliased with 3-factor interactions only

> **Answer: B** — Resolution IV designs prevent main effects from being aliased with 2-factor interactions (Main = 3-factor), but 2-factor interactions remain aliased with each other ($2+2=4$).

---

**Q28.** In Response Surface Methodology (RSM), a Central Composite Design (CCD) is used after screening to:

- A. Identify binary attribute defect categories
- **B. Model quadratic terms ($X^2$) and optimize response surface peaks/valleys ✓**
- C. Reduce Gauge R&R variability
- D. Eliminate the need for blocking

> **Answer: B** — CCD expands $2^k$ factorial designs by adding axial (star) points, allowing full estimation of second-order quadratic regression models for process optimization.

---

**Q29.** An EWMA (Exponentially Weighted Moving Average) control chart is superior to a standard Shewhart chart when:

- A. Detecting large, sudden process shifts ($> 3\sigma$)
- **B. Detecting small, persistent shifts in the process mean ($0.5\sigma\text{--}1.5\sigma$) quickly ✓**
- C. Subgroup sample sizes are purely attribute pass/fail counts
- D. Data has high non-linear curvature

> **Answer: B** — EWMA charts weight past and current observations exponentially, providing much higher sensitivity to small, gradual mean shifts than traditional Shewhart charts.

---

**Q30.** When designing a DOE, "Blocking" is a technique applied to:

- **A. Isolate and nuisance-control known homogeneous sources of variation (e.g., shifts, raw material batches) ✓**
- B. Eliminate the need for randomizing run sequences
- C. Force all interaction effects to zero
- D. Convert continuous variables into discrete attributes

> **Answer: A** — Blocking accounts for known, uninteresting noise sources across experimental runs, preventing background shifts from inflating experimental error variance.

---

**Q31.** In DOE analysis, a Box-Cox transformation is applied to response $Y$ when:

- A. Factors are completely qualitative
- **B. Model residuals violate equal variance or normality assumptions ✓**
- C. $R^2$ is exactly equal to $1.0$
- D. Design resolution is Resolution V or higher

> **Answer: B** — Box-Cox transforms response data ($Y^\lambda$) to stabilize variance and linearize relationships when residual diagnostic plots exhibit heteroscedasticity or skewness.

---

**Q32.** A process has USL = 100, LSL = 80. An $\bar{X}$-$R$ control chart shows the process is in statistical control with $\bar{X} = 90$ and $UCL_x = 96, LCL_x = 84$ ($n=5$). What can be stated about process capability?

- A. $C_p$ must be greater than 2.0
- **B. Process is in statistical control, but process capability ($C_p$) cannot be determined without knowing subgroup standard deviation ($\sigma$) ✓**
- C. Process is producing 5% defects because control limits are inside specification limits
- D. Control limits and specification limits are mathematically identical

> **Answer: B** — Control limits describe averages of subgroups ($\sigma_{\bar{x}} = \sigma / \sqrt{n}$), not individual part spread. Capability compares individual items to spec limits ($6\sigma$), requiring estimated $\sigma$.

---

**Q33.** What is the defining characteristic of a CUSUM (Cumulative Sum) control chart?

- A. Plots sample ranges against moving medians
- **B. Accumulates deviations of sample means from a target value to rapidly detect small shifts ✓**
- C. Used exclusively for non-parametric ordinal data
- D. Evaluates multi-stream attribute defect rates

> **Answer: B** — CUSUM charts incorporate memory of prior points by summing cumulative deviations from target, enabling rapid detection of small shifts ($< 1.5\sigma$).

---

**Q34.** In a $2^4$ full factorial design with 2 center points and 2 replicates, what is the total number of experimental runs required?

- A. 18
- B. 32
- **C. 34 ✓**
- D. 64

> **Answer: C** — Total runs $= (\text{Corner points} \times \text{Replicates}) + \text{Center points} = (2^4 \times 2) + 2 = (16 \times 2) + 2 = 34$ runs.

---

**Q35.** The concept of "Randomization" in experimental design primarily protects against:

- A. Measurement system bias
- **B. Uncontrolled background noise trends and time-dependent environmental biases ✓**
- C. High variance inflation factors (VIF)
- D. Alias structure in Resolution V designs

> **Answer: B** — Randomizing the run order spreads unobserved, time-related environmental or setup shifts randomly across treatments rather than confounding specific factors.

---

**Q36.** When transitioning a process during the Control phase, a "Control Plan" must incorporate all of the following EXCEPT:

- A. Critical-to-Quality (CTQ) metrics and specification limits
- B. Sampling frequency, sample size, and measurement method
- **C. ANOVA hypothesis p-values from the Analyze phase ✓**
- D. Corrective action protocols and responsible owners

> **Answer: C** — Control plans are operational risk management documents. Historical hypothesis testing $p$-values belong in project documentation, not shop-floor control plans.

---

**Q37.** In SPC, "Over-control" or "Tampering" occurs when operators:

- A. Fail to take action when an out-of-control point appears
- **B. Adjust a stable process in response to normal common-cause variation, increasing overall process variance ✓**
- C. Calculate control limits using $n > 10$
- D. Switch from $p$-charts to $u$-charts

> **Answer: B** — Adjusting a process that is in statistical control in response to natural common cause noise (tampering) actually doubles overall process variance (Deming’s Funnel Experiment).

---

**Q38.** A $2^{6-2}$ fractional factorial design generates how many runs (excluding center points) and what is its fraction size relative to a full factorial?

- A. 32 runs, 1/2 fraction
- **B. 16 runs, 1/4 fraction ✓**
- C. 16 runs, 1/8 fraction
- D. 8 runs, 1/4 fraction

> **Answer: B** — $2^{6-2} = 2^4 = 16$ runs. A full $2^6 = 64$ runs. $16 / 64 = 1/4$ fraction ($2^{-2} = 1/4$).

---

**Q39.** In an $\bar{X}$-$R$ chart, if the $R$-chart (Range chart) goes out of control, what is the immediate required analytical step?

- **A. Fix the range variation issue first; $\bar{X}$-chart control limits are invalid while the $R$-chart is out of control ✓**
- B. Ignore the $R$-chart and evaluate the $\bar{X}$-chart
- C. Recalculate specification limits
- D. Convert the data to an attribute $p$-chart

> **Answer: A** — Control limits for the $\bar{X}$-chart are calculated using $\bar{R}$ ($UCL = \bar{X} + A_2\bar{R}$). If process variation is unstable ($R$-chart out of control), the estimated mean limits are invalid.

---

**Q40.** Which financial validation principle distinguishes "Hard Savings" from "Soft Savings" during project sign-off in the Control phase?

- A. Hard savings adjust cycle times; soft savings reduce defect counts
- **B. Hard savings directly impact the P&L statement (e.g., cash cost reductions), whereas soft savings capture cost avoidance or capacity gains ✓**
- C. Soft savings are signed off by Finance; hard savings are signed off by the Black Belt
- D. Hard savings are only calculated in the Measure phase

> **Answer: B** — Hard savings produce measurable bottom-line cash/budget reductions. Soft savings represent indirect benefits like freed-up floor space or avoided future capital expenditure.

---


## Answer Key

| # | Ans | Topic |
|---|-----|-------|
| 1 | B | Improve phase objective |
| 2 | C | DOE acronym |
| 3 | C | Control phase objective |
| 4 | B | Poka-Yoke definition |
| 5 | B | 5S framework |
| 6 | B | SPC Control Limits definition |
| 7 | B | Kanban pull system |
| 8 | C | Control Plan ownership |
| 9 | B | SMED setup reduction |
| 10 | D | SOPs in Control phase |
| 11 | A | Main effect in DOE |
| 12 | B | Interaction effect in DOE |
| 13 | B | $2^k$ full factorial run calculation |
| 14 | B | Center points and curvature detection |
| 15 | C | I-MR chart application |
| 16 | A | $p$-Chart application |
| 17 | B | $u$-Chart application |
| 18 | B | Western Electric out-of-control rules |
| 19 | B | Pilot test purpose |
| 20 | B | Fractional factorial DOE screening |
| 21 | B | Aliasing / Confounding definition |
| 22 | A | $c$-Chart application |
| 23 | B | $\bar{X}$-$S$ Chart for $n > 10$ |
| 24 | A | Takt time calculation |
| 25 | B | Process mean shift detection rule |
| 26 | B | Out-of-Control Action Plan (OCAP) |
| 27 | B | Resolution IV aliasing structure |
| 28 | B | Central Composite Design (CCD) / RSM |
| 29 | B | EWMA chart sensitivity for small shifts |
| 30 | A | Blocking nuisance factors in DOE |
| 31 | B | Box-Cox transformation in DOE |
| 32 | B | Control limits vs specification limits |
| 33 | B | CUSUM chart properties |
| 34 | C | Total DOE runs with replicates and center points |
| 35 | B | Randomization purpose in DOE |
| 36 | C | Control Plan essential elements |
| 37 | B | Over-control / Tampering in SPC |
| 38 | B | Fractional factorial run and fraction size |
| 39 | A | $R$-chart instability impact on $\bar{X}$-chart |
| 40 | B | Hard vs. Soft savings validation |