# Six Sigma Black Belt — Measure Phase · 40 Practice Questions with Answers

> Difficulty mix: 8 Easy · 16 Medium · 16 Hard

---

## Easy Questions (Q1–Q8)

**Q1.** Which type of data is counted (e.g., number of defects)?

- A. Continuous data
- **B. Attribute (discrete) data ✓**
- C. Ordinal data
- D. Ratio data

> **Answer: B** — Attribute/discrete data counts occurrences (defects, pass/fail). Continuous data is measured on a scale (temperature, weight).

---

**Q2.** The Mean of a dataset is best described as:

- A. The most frequently occurring value
- B. The middle value when data is sorted
- **C. The arithmetic average of all values ✓**
- D. The difference between the largest and smallest values

> **Answer: C** — Mean = sum of all values ÷ count. Median is the middle value; mode is most frequent; range is max − min.

---

**Q3.** What does "defect opportunity" mean in Six Sigma?

- A. A chance to improve the process
- **B. Any point in the process where a defect can occur ✓**
- C. The total number of defects found
- D. A failed inspection step

> **Answer: B** — An opportunity is any place on a unit where a defect could occur. DPMO = (Defects ÷ (Units × Opportunities)) × 1,000,000.

---

**Q4.** A histogram is primarily used to:

- A. Track defects over time
- **B. Display the frequency distribution of a dataset ✓**
- C. Compare two process means
- D. Map the relationship between two variables

> **Answer: B** — Histograms show how data is distributed across value ranges (bins), revealing shape, center, and spread at a glance.

---

**Q5.** Which measure of central tendency is MOST resistant to outliers?

- A. Mean
- B. Mode
- **C. Median ✓**
- D. Range

> **Answer: C** — The median (middle value) is resistant to extreme values. The mean is pulled toward outliers.

---

**Q6.** Standard deviation is a measure of:

- A. Central tendency
- **B. Process spread (variation) ✓**
- C. Process centering
- D. Defect frequency

> **Answer: B** — Standard deviation (σ) quantifies how spread out data points are around the mean. Smaller σ = less variation.

---

**Q7.** Which chart is used to display the cumulative percentage of defects by category?

- A. Histogram
- B. Box plot
- **C. Pareto chart ✓**
- D. Run chart

> **Answer: C** — A Pareto chart combines a bar chart with a cumulative line, helping identify the "vital few" categories that cause most defects (80/20 rule).

---

**Q8.** A process is said to be "in statistical control" when:

- A. All output meets specification limits
- **B. Only common-cause variation is present ✓**
- C. The Cpk is greater than 1.33
- D. No defects are produced

> **Answer: B** — Statistical control means only common-cause (inherent, random) variation exists. A process can be in control yet still produce defects if it is off-target or has large spread.

---

## Medium Questions (Q9–Q24)

**Q9.** DPMO = 3,400 corresponds to approximately which sigma level (with 1.5σ shift)?

- A. 3.0σ
- B. 4.0σ
- **C. 4.5σ ✓**
- D. 5.0σ

> **Answer: C** — 3,400 DPMO = 4.5 sigma (with the standard 1.5σ shift). The 6σ benchmark is 3.4 DPMO; 4σ ≈ 6,210 DPMO.

---

**Q10.** In a Gauge R&R study, %Contribution of Gage is ideally:

- A. Less than 1%
- B. Between 1% and 9%
- **C. Less than 10% ✓**
- D. Less than 30%

> **Answer: C** — For %Contribution (variance component), <1% is ideal, 1–9% is acceptable, >9% is unacceptable. For %Study Variation, <10% is ideal, 10–30% may be marginal.

---

**Q11.** Which sampling method divides the population into subgroups and samples from each proportionally?

- A. Simple random sampling
- **B. Stratified sampling ✓**
- C. Cluster sampling
- D. Systematic sampling

> **Answer: B** — Stratified sampling ensures each subgroup (stratum) is represented, reducing sampling error when subgroups differ significantly.

---

**Q12.** A box plot displays which five statistics?

- A. Mean, mode, median, range, variance
- **B. Min, Q1, median, Q3, max ✓**
- C. Mean, ±1σ, ±2σ, ±3σ
- D. Min, mean, mode, max, range

> **Answer: B** — A box plot shows the five-number summary: minimum, Q1, median (Q2), Q3, and maximum. Whiskers can extend to 1.5×IQR.

---

**Q13.** The Interquartile Range (IQR) is calculated as:

- A. Max − Min
- **B. Q3 − Q1 ✓**
- C. Mean − Median
- D. UCL − LCL

> **Answer: B** — IQR = Q3 − Q1. It represents the middle 50% of data and is robust against outliers.

---

**Q14.** Which test checks whether a dataset follows a normal distribution?

- A. F-test
- B. Chi-square test for independence
- **C. Anderson-Darling or Shapiro-Wilk test ✓**
- D. Two-sample t-test

> **Answer: C** — Normality tests (Anderson-Darling, Shapiro-Wilk, Ryan-Joiner) compare data to a normal curve. p-value indicates whether normality can be assumed.

---

**Q15.** If the tolerance is 20 units and the process standard deviation is 4 units, what is Cp?

- **A. 0.83 ✓**
- B. 1.00
- C. 1.33
- D. 0.67

> **Answer: A** — Cp = Tolerance ÷ (6σ) = 20 ÷ (6 × 4) = 20 ÷ 24 ≈ **0.83**. Cp < 1.00 means the process spread exceeds the specification width.

---

**Q16.** Repeatability in a Gauge R&R study measures:

- A. Variation between different appraisers measuring the same part
- **B. Variation when the same appraiser measures the same part multiple times with the same gauge ✓**
- C. Variation between different gauges
- D. Overall measurement system accuracy

> **Answer: B** — Repeatability (Equipment Variation, EV) = within-appraiser variation. Reproducibility (Appraiser Variation, AV) = between-appraiser variation.

---

**Q17.** A run chart is most useful for:

- A. Comparing process variation to specification limits
- **B. Identifying trends or patterns in data over time ✓**
- C. Calculating process sigma level
- D. Determining measurement system adequacy

> **Answer: B** — Run charts plot data in time order, revealing trends, shifts, and cycles. They lack control limits but detect non-random patterns using run rules.

---

**Q18.** Which probability distribution is most appropriate for modeling the number of defects per unit?

- A. Normal distribution
- B. Binomial distribution
- **C. Poisson distribution ✓**
- D. Exponential distribution

> **Answer: C** — The Poisson distribution models count of rare events per unit when events occur independently at a constant average rate.

---

**Q19.** Precision in a measurement system refers to:

- A. How close measurements are to the true value
- **B. How consistent (repeatable) measurements are with each other ✓**
- C. The ability to detect small differences
- D. The range of values the gauge can measure

> **Answer: B** — Precision = consistency/repeatability. Accuracy = closeness to the true value. A gauge can be precise but inaccurate (systematically biased).

---

**Q20.** When the process mean equals the target and is centered between spec limits, Cp and Cpk are:

- A. Cp > Cpk
- **B. Cp = Cpk ✓**
- C. Cpk > Cp
- D. Both equal zero

> **Answer: B** — Cpk ≤ Cp always. They are equal only when the process is perfectly centered (mean = midpoint of specification).

---

**Q21.** Which control chart is appropriate for monitoring the proportion of defective items in a sample?

- A. X-bar and R chart
- B. I-MR chart
- **C. p-chart ✓**
- D. c-chart

> **Answer: C** — The p-chart monitors the proportion (fraction) defective. Use c-chart for count of defects per unit (constant unit size), u-chart for variable unit size.

---

**Q22.** The Central Limit Theorem states that:

- A. All manufacturing processes follow a normal distribution
- **B. Sample means from any population will be normally distributed as sample size increases ✓**
- C. Process variation decreases as sample size increases
- D. The median equals the mean for symmetric distributions

> **Answer: B** — The CLT underpins X-bar charts: regardless of population shape, the distribution of sample means approaches normality as n increases (typically n ≥ 30).

---

**Q23.** In a measurement system, linearity refers to:

- A. Variation between appraisers
- **B. Consistency of bias across the operating range of the gauge ✓**
- C. The ability to measure very small differences
- D. Stability of measurements over time

> **Answer: B** — Linearity measures whether the gauge's bias is consistent across the full measurement range. Inconsistent bias across low/medium/high values = poor linearity.

---

**Q24.** A Type I error (α error) in hypothesis testing means:

- A. Failing to detect a real difference (false negative)
- **B. Concluding a difference exists when it does not (false positive) ✓**
- C. Using the wrong statistical test
- D. Having an insufficient sample size

> **Answer: B** — Type I error (α) = rejecting H₀ when it is true (false positive). Type II error (β) = failing to reject H₀ when it is false (missed detection).

---

## Hard Questions (Q25–Q40)

**Q25.** Statistical power (1 − β) is the probability of:

- A. Making a Type I error
- **B. Correctly rejecting a false null hypothesis ✓**
- C. Accepting the null hypothesis when it is true
- D. Choosing the wrong significance level

> **Answer: B** — Power = 1 − β = probability of detecting a real effect when it exists. Increases with larger n, larger effect size, or higher α.

---

**Q26.** A process has USL = 50, LSL = 30, mean = 43, σ = 2.5. What is Cpk?

- **A. 0.93 ✓**
- B. 1.07
- C. 1.33
- D. 0.80

> **Answer: A** — Cpk = min[(USL−μ)/(3σ), (μ−LSL)/(3σ)] = min[(50−43)/7.5, (43−30)/7.5] = min[**0.93**, 1.73] = **0.93**. Process is limited by proximity to USL.

---

**Q27.** Which Gauge R&R result indicates an acceptable measurement system?

- A. %GRR (Study Variation) = 35%
- B. Number of distinct categories (ndc) = 2
- **C. %GRR (Study Variation) = 8% ✓**
- D. Repeatability > Reproducibility by 3×

> **Answer: C** — %GRR < 10% = acceptable; 10–30% = marginal; >30% = unacceptable. ndc ≥ 5 is required; ndc = 2 is unacceptable.

---

**Q28.** A process produces 45 defects in 500 units with 6 opportunities each. What is the DPMO?

- **A. 15,000 ✓**
- B. 90,000
- C. 45,000
- D. 9,000

> **Answer: A** — DPMO = [45 ÷ (500 × 6)] × 1,000,000 = [45 ÷ 3,000] × 1,000,000 = **15,000 DPMO** ≈ 3.67σ.

---

**Q29.** The Poisson distribution assumption requires that:

- A. Events are dependent and follow a fixed pattern
- **B. Events are rare, independent, and occur at a constant average rate ✓**
- C. Sample size n > 30
- D. Data follows a normal distribution

> **Answer: B** — Poisson requires: rare events, independence, and constant mean rate (λ). Violation of independence or constant rate invalidates the model.

---

**Q30.** What sample size is needed to detect a shift of 1.5σ with 90% power and α = 0.05 (two-tailed)?

- A. n ≈ 19
- B. n ≈ 30
- **C. n ≈ 44 ✓**
- D. n ≈ 52

> **Answer: C** — n = [(z_α/2 + z_β) / δ]² = [(1.96 + 1.28) / 1.5]² = [3.24 / 1.5]² = 2.16² ≈ **44**. Always round up.

---

**Q31.** In a Gauge R&R ANOVA method, which interaction term is tested first?

- A. Part × Gauge
- **B. Appraiser × Part ✓**
- C. Part × Measurement
- D. Gauge × Specification

> **Answer: B** — The ANOVA Gauge R&R tests the Appraiser × Part interaction first. If non-significant (p > 0.25), it is pooled into the error term to improve estimates of main effects.

---

**Q32.** For a Binomial distribution with n = 20 and p = 0.05, the expected mean and variance are:

- **A. Mean = 1.0, Variance = 0.95 ✓**
- B. Mean = 0.05, Variance = 0.95
- C. Mean = 1.0, Variance = 1.0
- D. Mean = 4.0, Variance = 0.95

> **Answer: A** — Binomial: Mean = np = 20 × 0.05 = **1.0**; Variance = np(1−p) = 20 × 0.05 × 0.95 = **0.95**.

---

**Q33.** Which control chart is used for individual measurements when subgroup size = 1?

- A. X-bar and R chart
- B. p-chart
- **C. I-MR (Individuals and Moving Range) chart ✓**
- D. c-chart

> **Answer: C** — When only one measurement is taken per time point (n = 1), the I-MR chart is used. Moving range between consecutive points estimates short-term variation.

---

**Q34.** A measurement system has bias = 0.8 units and process tolerance = 20 units. The % bias is:

- **A. 4% ✓**
- B. 6%
- C. 8%
- D. 10%

> **Answer: A** — % Bias = (|Bias| ÷ Tolerance) × 100 = (0.8 ÷ 20) × 100 = **4%**. Ideally <5% of tolerance.

---

**Q35.** A control chart shows 9 consecutive points on one side of the centerline. This is an example of:

- A. A random pattern — no action needed
- **B. A special cause — the run rule is violated ✓**
- C. Common cause variation within control limits
- D. A measurement system error only

> **Answer: B** — Nelson/Western Electric run rules flag 9 (or 8, per standard) consecutive points on one side of the center line as a non-random shift requiring investigation.

---

**Q36.** The relationship between Cp and sigma level (centered process, no shift) is:

- **A. Sigma level = 3 × Cp ✓**
- B. Sigma level = Cp ÷ 3
- C. Sigma level = 6 × Cp
- D. Sigma level = Cp + 1.5

> **Answer: A** — For a centered process: Cp = (USL−LSL)/(6σ), so Sigma level = 3 × Cp. With the 1.5σ long-term shift: long-term sigma = 3×Cp − 1.5.

---

**Q37.** Which non-normal distribution is commonly used to model time-to-failure data in reliability analysis?

- A. Binomial
- B. Poisson
- **C. Weibull ✓**
- D. Hypergeometric

> **Answer: C** — The Weibull distribution's shape parameter (β) models wear-out (β > 1), constant failure rate (β = 1, exponential), or infant mortality (β < 1).

---

**Q38.** Stability in a measurement system refers to:

- A. How close the gauge reads to the master value
- **B. Consistency of bias over time when measuring the same reference part ✓**
- C. Agreement between two different appraisers
- D. The smallest increment the gauge can detect

> **Answer: B** — Stability (drift) measures change in bias over time using the same gauge on the same reference standard, assessed over weeks or months.

---

**Q39.** If repeatability variance = 4 and reproducibility variance = 9, what is the total Gauge R&R standard deviation?

- **A. 3.61 ✓**
- B. 13.0
- C. 6.5
- D. 2.65

> **Answer: A** — Total GRR variance = 4 + 9 = 13. Total GRR σ = √13 ≈ **3.61**. Variances add; standard deviations do not.

---

**Q40.** A p-chart has p̄ = 0.04 and average sample size n = 100. The Upper Control Limit is approximately:

- **A. 0.099 ✓**
- B. 0.079
- C. 0.116
- D. 0.060

> **Answer: A** — UCL_p = p̄ + 3√[p̄(1−p̄)/n] = 0.04 + 3√[0.04 × 0.96 / 100] = 0.04 + 3 × 0.0196 = 0.04 + 0.059 ≈ **0.099**.

---

## Answer Key Summary

| # | Answer | Topic |
|---|--------|-------|
| 1 | B | Data types |
| 2 | C | Measures of central tendency |
| 3 | B | Defect opportunity / DPMO |
| 4 | B | Histogram |
| 5 | C | Median vs. outliers |
| 6 | B | Standard deviation |
| 7 | C | Pareto chart |
| 8 | B | Statistical control |
| 9 | C | DPMO → Sigma conversion |
| 10 | C | Gauge R&R %Contribution |
| 11 | B | Stratified sampling |
| 12 | B | Box plot five-number summary |
| 13 | B | IQR = Q3 − Q1 |
| 14 | C | Normality tests |
| 15 | A | Cp calculation |
| 16 | B | Repeatability (EV) |
| 17 | B | Run chart purpose |
| 18 | C | Poisson distribution |
| 19 | B | Precision vs. accuracy |
| 20 | B | Cp = Cpk when centered |
| 21 | C | p-chart |
| 22 | B | Central Limit Theorem |
| 23 | B | Linearity |
| 24 | B | Type I error |
| 25 | B | Statistical power |
| 26 | A | Cpk calculation |
| 27 | C | Gauge R&R acceptability |
| 28 | A | DPMO calculation |
| 29 | B | Poisson assumptions |
| 30 | C | Sample size calculation |
| 31 | B | ANOVA Gauge R&R interaction |
| 32 | A | Binomial mean and variance |
| 33 | C | I-MR chart |
| 34 | A | % Bias calculation |
| 35 | B | Run rule violation |
| 36 | A | Cp to sigma level |
| 37 | C | Weibull distribution |
| 38 | B | Measurement system stability |
| 39 | A | GRR variance calculation |
| 40 | A | p-chart UCL calculation |
