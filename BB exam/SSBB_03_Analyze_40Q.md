# Six Sigma Black Belt — Analyze Phase · 40 Questions with Answers

> Difficulty mix: 10 Easy · 16 Medium · 14 Hard

---

## Easy (Q1–Q10)

**Q1.** The primary goal of the Analyze phase is to:

- A. Implement solutions
- B. Collect baseline data
- **C. Identify and verify the root causes of the problem ✓**
- D. Set up control charts

> **Answer: C** — Analyze uses statistical and graphical tools to move from symptoms (Y) to confirmed root causes (vital few Xs).

---

**Q2.** A fishbone (Ishikawa) diagram is used to:

- A. Plot defect frequency over time
- **B. Visually organize potential causes of a problem ✓**
- C. Calculate process capability
- D. Map suppliers to outputs

> **Answer: B** — Fishbone diagrams structure brainstorming around cause categories (6 Ms), linking potential causes to the effect (problem).

---

**Q3.** The 6 Ms in a fishbone diagram stand for:

- **A. Man, Machine, Material, Method, Measurement, Mother Nature ✓**
- B. Motive, Means, Metrics, Management, Mission, Money
- C. Manufacturing, Marketing, Management, Metrics, Material, Mission
- D. Man, Money, Method, Machine, Measurement, Market

> **Answer: A** — These are the standard cause categories for manufacturing. Service processes sometimes use 4 Ps or 5 Ss variants.

---

**Q4.** A "5 Whys" analysis is used to:

- A. Identify all possible causes in one step
- **B. Drill down to the root cause by repeatedly asking "Why?" ✓**
- C. Prioritize defects by frequency
- D. Map the process flow

> **Answer: B** — Each "Why?" answer becomes the subject of the next "Why?" — driving from symptom to systemic root cause, typically in 3–7 iterations.

---

**Q5.** A scatter plot is used to:

- A. Show the distribution of one variable
- **B. Show the relationship between two continuous variables ✓**
- C. Identify the most frequent defect category
- D. Track defects over time

> **Answer: B** — Scatter plots display correlation (positive, negative, or none) between X and Y variables.

---

**Q6.** A p-value of 0.03 with α = 0.05 means:

- A. H₀ is true with 3% probability
- **B. Reject H₀ — the result is statistically significant ✓**
- C. The alternative hypothesis is false
- D. Sample size was insufficient

> **Answer: B** — p < α → reject H₀. p-value = probability of observing the data (or more extreme) if H₀ were true.

---

**Q7.** Regression analysis primarily models:

- A. Whether two population variances are equal
- **B. The relationship between one or more inputs (X) and an output (Y) ✓**
- C. Whether data is normally distributed
- D. The number of defects per unit

> **Answer: B** — Simple linear regression: Y = β₀ + β₁X + ε. Multiple regression adds more Xs.

---

**Q8.** A Pareto chart is used in Analyze to:

- A. Show process flow
- B. Plot data over time
- **C. Identify the vital few causes contributing to the majority of defects ✓**
- D. Measure process capability

> **Answer: C** — In Analyze, Pareto charts prioritize which X factors or defect types deserve the most investigation attention.

---

**Q9.** The null hypothesis (H₀) in hypothesis testing typically states:

- A. There is a significant difference between groups
- **B. There is no difference or effect (status quo) ✓**
- C. The process is out of control
- D. The sample size is sufficient

> **Answer: B** — H₀ = "no difference, no effect, no relationship." The burden of proof is on rejecting H₀ with sufficient evidence (p < α).

---

**Q10.** A correlation coefficient (r) of −0.85 indicates:

- A. No relationship between X and Y
- B. A strong positive relationship
- **C. A strong negative relationship ✓**
- D. A weak negative relationship

> **Answer: C** — r ranges from −1 to +1. |r| > 0.7 is typically considered strong; negative r means Y decreases as X increases.

---

## Medium (Q11–Q26)

**Q11.** A multi-vari chart identifies which three sources of variation?

- **A. Positional (within piece), cyclical (piece-to-piece), temporal (time-to-time) ✓**
- B. Repeatability, reproducibility, part-to-part
- C. Short-term, long-term, measurement
- D. Common cause, special cause, assignable cause

> **Answer: A** — Multi-vari charts help focus DOE resources by visually revealing which variation family is dominant before statistical testing.

---

**Q12.** An independent samples t-test is used when:

- A. Comparing more than two means
- **B. Comparing the means of two independent groups ✓**
- C. Comparing one sample mean to a target
- D. Comparing two related (paired) samples

> **Answer: B** — Two-sample t-test: H₀: μ₁ = μ₂. Paired t-test is used when measurements are matched (before/after on the same unit).

---

**Q13.** ANOVA (Analysis of Variance) is used to:

- A. Compare two population variances
- **B. Compare means of three or more groups simultaneously ✓**
- C. Test whether data is normally distributed
- D. Calculate process capability

> **Answer: B** — One-way ANOVA tests H₀: μ₁ = μ₂ = … = μk. Significant result tells you at least one mean differs; post-hoc tests identify which pairs.

---

**Q14.** R² (coefficient of determination) in regression represents:

- A. The strength of the negative correlation
- **B. The proportion of Y variation explained by the model ✓**
- C. The slope of the regression line
- D. The residual error

> **Answer: B** — R² = 0.80 means 80% of the variation in Y is explained by the X variable(s) in the model.

---

**Q15.** Which test compares two population variances?

- A. t-test
- B. ANOVA
- **C. F-test (Levene's or Bartlett's test) ✓**
- D. Chi-square goodness-of-fit

> **Answer: C** — The F-test (or Levene's for non-normal data) tests H₀: σ₁² = σ₂². Equal variance is an assumption of the 2-sample t-test.

---

**Q16.** A chi-square test of independence is used for:

- A. Comparing two continuous means
- **B. Testing whether two categorical variables are related ✓**
- C. Assessing normality
- D. Comparing three or more variances

> **Answer: B** — Chi-square independence test: H₀ = the two categorical variables are independent. Uses a contingency table of observed vs. expected frequencies.

---

**Q17.** In hypothesis testing, "failing to reject H₀" means:

- A. H₀ is proven true
- **B. There is insufficient evidence to conclude a difference exists ✓**
- C. The alternative hypothesis is confirmed
- D. The test should be repeated with a different α

> **Answer: B** — Not rejecting H₀ is not the same as proving it true. It simply means the data do not provide enough evidence against it at the chosen α level.

---

**Q18.** A process capability analysis shows Cp = 1.50 and Cpk = 0.90. This indicates:

- A. The process is capable and centered
- **B. The process has adequate spread but is significantly off-center ✓**
- C. The process spread is too wide
- D. The process is both capable and centered

> **Answer: B** — Cp > Cpk indicates off-centering. Large gap (1.50 vs 0.90) = the process mean is substantially shifted toward one specification limit.

---

**Q19.** A Mann-Whitney U test is used as a non-parametric alternative to:

- A. One-way ANOVA
- **B. Two-sample t-test ✓**
- C. Paired t-test
- D. Chi-square test

> **Answer: B** — Mann-Whitney U compares medians (or rank distributions) of two independent groups when normality cannot be assumed.

---

**Q20.** Residual analysis in regression checks:

- A. Whether the sample size is adequate
- **B. Whether model assumptions (normality, constant variance, independence of errors) are met ✓**
- C. Whether the correlation coefficient is significant
- D. Whether the data needs transformation

> **Answer: B** — Residuals (actual − predicted) should be normally distributed, randomly scattered around zero, and show no patterns. Violations indicate model issues.

---

**Q21.** A Box-Cox transformation is applied when:

- A. Data is normally distributed
- **B. Data is non-normal and needs to be transformed to meet statistical test assumptions ✓**
- C. Outliers need to be removed
- D. The sample size is too small

> **Answer: B** — Box-Cox finds the optimal power transformation (λ) to normalize data — enabling use of normal-based statistical tests.

---

**Q22.** The Kruskal-Wallis test is a non-parametric alternative to:

- A. Two-sample t-test
- B. Paired t-test
- **C. One-way ANOVA ✓**
- D. Chi-square test

> **Answer: C** — Kruskal-Wallis compares medians of 3+ independent groups when normality cannot be assumed. Equivalent to one-way ANOVA on ranks.

---

**Q23.** In a regression model, multicollinearity occurs when:

- A. The residuals are not normally distributed
- **B. Two or more predictor variables are highly correlated with each other ✓**
- C. The R² value is too low
- D. The sample size is insufficient

> **Answer: B** — Multicollinearity inflates standard errors of coefficients, making individual X effects unreliable. Detected using VIF (Variance Inflation Factor); VIF > 10 is concerning.

---

**Q24.** A paired t-test is appropriate when:

- A. Comparing means of two independent populations
- **B. Each observation in one group is matched to an observation in the other group ✓**
- C. Comparing more than two means
- D. Data is non-normal

> **Answer: B** — Paired t-test controls for unit-to-unit variation by analyzing differences within matched pairs (e.g., before/after measurements on the same unit).

---

**Q25.** The purpose of a confidence interval in Analyze is to:

- A. Set specification limits for the process
- **B. Estimate a population parameter with a stated level of certainty ✓**
- C. Calculate the process sigma level
- D. Determine whether the measurement system is adequate

> **Answer: B** — A 95% CI means: if the study were repeated many times, 95% of the intervals constructed would contain the true population parameter.

---

**Q26.** In the Analyze phase, a "vital few" X refers to:

- A. All input variables identified in the SIPOC
- **B. The small number of inputs that have the largest impact on Y ✓**
- C. Any X with a p-value > 0.05
- D. Inputs that cannot be controlled

> **Answer: B** — The Pareto principle applies: a few Xs (vital few) drive most of the Y variation. Analyze confirms which Xs are statistically significant.

---

## Hard (Q27–Q40)

**Q27.** A one-way ANOVA F-ratio equals:

- **A. Mean Square Between Groups ÷ Mean Square Within Groups ✓**
- B. Total Variance ÷ Residual Variance
- C. Between-group variance × Within-group variance
- D. Sum of Squares Between ÷ Total Sum of Squares

> **Answer: A** — F = MS_Between / MS_Within. Large F → means differ more than expected by chance → reject H₀.

---

**Q28.** In simple linear regression Y = β₀ + β₁X, a β₁ = −3.5 means:

- A. Y increases by 3.5 for each unit increase in X
- **B. Y decreases by 3.5 units for each one-unit increase in X ✓**
- C. The intercept is −3.5
- D. The model explains 3.5% of variance

> **Answer: B** — β₁ (slope) = change in Y per unit change in X. Negative slope = inverse relationship.

---

**Q29.** A regression model has R² = 0.72 and an F-test p-value = 0.001. This means:

- A. The model explains 72% of variance but is not significant
- **B. The model is statistically significant and explains 72% of Y variation ✓**
- C. 72% of the residuals are within specification
- D. The model has 72 degrees of freedom

> **Answer: B** — p < α means the model is significant (not all β = 0). R² = 0.72 means 72% of Y's variation is explained by the Xs in the model.

---

**Q30.** In a 2-sample t-test with unequal variances, which formula is used for degrees of freedom?

- A. df = n₁ + n₂
- B. df = n₁ + n₂ − 1
- **C. Welch-Satterthwaite approximation ✓**
- D. df = n₁ × n₂

> **Answer: C** — The Welch-Satterthwaite equation adjusts df when variances are unequal, producing a fractional df that is then rounded down, giving a more conservative t-critical value.

---

**Q31.** A logistic regression model is used when:

- A. The response variable Y is continuous
- **B. The response variable Y is binary (0/1, pass/fail) ✓**
- C. There is only one predictor X
- D. Data is non-normal continuous

> **Answer: B** — Logistic regression models the probability of a binary outcome (defect/no defect). The output is a probability (0–1), not a continuous value.

---

**Q32.** An analyst fits a regression model and finds VIF = 15 for one predictor. The best action is:

- A. Increase the sample size
- **B. Remove or combine highly correlated predictors to reduce multicollinearity ✓**
- C. Increase α from 0.05 to 0.10
- D. Apply a Box-Cox transformation

> **Answer: B** — VIF > 10 (some use 5) indicates severe multicollinearity. Solutions: remove one correlated X, create composite variables, or use ridge regression.

---

**Q33.** A process improvement team wants to test whether a new supplier's material reduces defect rate compared to the current supplier. The appropriate test is:

- A. One-sample t-test
- **B. Two-proportion z-test or chi-square test ✓**
- C. Paired t-test
- D. One-way ANOVA

> **Answer: B** — Comparing two defect proportions (p₁ vs p₂) uses the two-proportion z-test or chi-square test of independence.

---

**Q34.** In hypothesis testing, increasing sample size while keeping α constant:

- A. Increases Type I error risk
- **B. Increases statistical power (reduces Type II error) ✓**
- C. Has no effect on test results
- D. Decreases the ability to detect real differences

> **Answer: B** — Larger n → smaller standard error → easier to detect true differences → higher power (1 − β).

---

**Q35.** A Mood's Median test is used to:

- A. Compare two population variances
- **B. Compare medians of two or more groups when data is non-normal ✓**
- C. Test for normality
- D. Calculate correlation between two variables

> **Answer: B** — Mood's Median test is a non-parametric alternative to ANOVA when the normality assumption is violated and Kruskal-Wallis assumptions are also not met.

---

**Q36.** In stepwise regression, variables are added or removed based on:

- A. The correlation coefficient R
- **B. Their statistical significance (p-value) at each step ✓**
- C. The R² value of the full model
- D. Analyst judgment only

> **Answer: B** — Stepwise regression (forward, backward, or both) adds/removes predictors based on p-value thresholds (typically α-to-enter and α-to-remove).

---

**Q37.** A team plots a scatter diagram of X (temperature) vs. Y (defect rate) and finds r = 0.91, p = 0.002. The correct conclusion is:

- A. Temperature causes defects
- **B. There is a strong, statistically significant positive correlation between temperature and defect rate ✓**
- C. Temperature explains 91% of defect variation
- D. The model is ready for use without further validation

> **Answer: B** — Correlation ≠ causation. r = 0.91 and p < 0.05 confirms a strong, significant linear relationship — but DOE is needed to confirm causality.

---

**Q38.** A Levene's test is preferred over Bartlett's test for equality of variances when:

- A. Sample sizes are equal
- **B. Data may not be normally distributed ✓**
- C. There are only two groups
- D. The F-ratio is very large

> **Answer: B** — Bartlett's test assumes normality; Levene's test is robust to non-normality, making it more reliable for real-world manufacturing data.

---

**Q39.** The error (residual) in a regression model represents:

- A. The slope of the regression line
- **B. The difference between the observed Y and the predicted Ŷ ✓**
- C. The total variation in Y
- D. The unexplained variation due to multicollinearity

> **Answer: B** — Residual = Y − Ŷ. Analyzing residuals checks model fit, reveals outliers, and tests assumptions (normality, constant variance, independence).

---

**Q40.** A team uses a cause-and-effect matrix (C&E matrix) to:

- A. Confirm root causes with statistical tests
- **B. Prioritize potential Xs based on their relationship to key output variables (Ys) ✓**
- C. Map process steps and identify waste
- D. Calculate DPMO for each defect type

> **Answer: B** — The C&E matrix scores each potential X against each Y (weighted by importance), producing a total score to prioritize which Xs to investigate further in DOE or hypothesis testing.

---

## Answer Key

| # | Ans | Topic |
|---|-----|-------|
| 1 | C | Analyze phase goal |
| 2 | B | Fishbone diagram |
| 3 | A | 6 Ms |
| 4 | B | 5 Whys |
| 5 | B | Scatter plot |
| 6 | B | p-value interpretation |
| 7 | B | Regression purpose |
| 8 | C | Pareto in Analyze |
| 9 | B | Null hypothesis |
| 10 | C | Correlation coefficient |
| 11 | A | Multi-vari chart |
| 12 | B | Independent t-test |
| 13 | B | ANOVA purpose |
| 14 | B | R² definition |
| 15 | C | F-test for variance |
| 16 | B | Chi-square independence |
| 17 | B | Failing to reject H₀ |
| 18 | B | Cp vs Cpk gap |
| 19 | B | Mann-Whitney U |
| 20 | B | Residual analysis |
| 21 | B | Box-Cox transformation |
| 22 | C | Kruskal-Wallis |
| 23 | B | Multicollinearity |
| 24 | B | Paired t-test |
| 25 | B | Confidence interval |
| 26 | B | Vital few Xs |
| 27 | A | ANOVA F-ratio |
| 28 | B | Regression slope |
| 29 | B | R² and F-test |
| 30 | C | Welch-Satterthwaite df |
| 31 | B | Logistic regression |
| 32 | B | VIF / multicollinearity |
| 33 | B | Two-proportion test |
| 34 | B | Sample size and power |
| 35 | B | Mood's Median test |
| 36 | B | Stepwise regression |
| 37 | B | Correlation vs. causation |
| 38 | B | Levene's vs. Bartlett's |
| 39 | B | Residual definition |
| 40 | B | C&E matrix |
