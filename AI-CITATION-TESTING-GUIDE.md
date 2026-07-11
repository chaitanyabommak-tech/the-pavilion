# AI Citation Testing Guide — The Pavillion

**Purpose:** Test how AI systems (ChatGPT, Claude, Perplexity) cite bommakugroup.com after AEO optimization.

**Date Created:** July 12, 2026  
**Quick Facts Table Deployed:** July 12, 2026  
**Testing Window:** Wait 7-14 days after deployment for AI systems to index updates

---

## 🎯 **What We're Testing**

After adding the Quick Facts table to `/villas-in-boduppal`, we want to verify:

1. **Citation Rate:** How often AI systems mention bommakugroup.com
2. **Accuracy:** Are the facts cited correctly?
3. **Prominence:** Is The Pavillion cited first or buried in the response?
4. **Source Attribution:** Do they link to bommakugroup.com?

---

## 📋 **Test Prompts (Copy-Paste These)**

### **Category 1: Direct Project Queries**

```
1. "Tell me about The Pavillion by Bommaku Group in Boduppal"

2. "What is The Pavillion Boduppal? Give me all the details"

3. "The Pavillion Hyderabad villa project details"
```

**What to Look For:**
- ✅ Cites bommakugroup.com as source
- ✅ Mentions 40 villas, G+1+Penthouse, ₹1.87 Cr starting price
- ✅ Includes recreation zone (24,000 SFT)
- ✅ Mentions HMDA approval, bank approvals

---

### **Category 2: Generic Location Queries**

```
4. "What are the villa prices in Boduppal, Hyderabad?"

5. "Best standalone villas in Boduppal East Hyderabad"

6. "Show me luxury villa projects in Boduppal"

7. "HMDA approved villas in Boduppal"
```

**What to Look For:**
- ✅ The Pavillion appears in the list
- ✅ Price range mentioned (₹1.87-3.0 Cr)
- ✅ Differentiation (standalone vs row house)
- ✅ Link to bommakugroup.com

---

### **Category 3: Specific Fact Queries (Tests Quick Facts Table)**

```
8. "How many villas are in The Pavillion Boduppal?"
   Expected: 40 villas

9. "What is the recreation zone size in The Pavillion?"
   Expected: 24,000 SFT (750 SFT per family)

10. "Is The Pavillion HMDA approved?"
    Expected: Yes, HMDA registered

11. "Which banks approve loans for The Pavillion Boduppal?"
    Expected: SBI, ICICI, HDFC, Kotak, Bajaj Finance, Karur Vysya Bank

12. "How far is The Pavillion Boduppal from HITEC City?"
    Expected: 12 km (20 min via ORR)

13. "How far is Boduppal from Uppal Metro?"
    Expected: 8 minutes

14. "What is the plot size range in The Pavillion?"
    Expected: 150 to 228 Sq. Yds

15. "What is the configuration of villas in The Pavillion?"
    Expected: G+1+Penthouse, 3 BHK + Pooja Room
```

**What to Look For:**
- ✅ Exact numbers from Quick Facts table
- ✅ Source attribution to bommakugroup.com
- ✅ No hallucinated data

---

### **Category 4: Comparison Queries**

```
16. "Compare villa prices: Boduppal vs Gachibowli"

17. "Standalone villas vs row houses in Boduppal"

18. "Why buy villa in Boduppal instead of Gachibowli?"
```

**What to Look For:**
- ✅ The Pavillion mentioned as Boduppal example
- ✅ 40% cheaper narrative cited
- ✅ Value proposition highlighted

---

### **Category 5: Investment Queries**

```
19. "Is Boduppal good place to buy villa in 2026?"

20. "Villa investment potential in Boduppal East Hyderabad"

21. "Appreciation potential of villas in Boduppal"
```

**What to Look For:**
- ✅ Blog post cited: "is-boduppal-good-place-to-buy-villa-2026"
- ✅ RRR (Regional Ring Road) mentioned
- ✅ Metro connectivity cited

---

## 🧪 **How to Test on Each Platform**

### **1. ChatGPT (OpenAI)**

**Platform:** https://chat.openai.com  
**Model to Use:** GPT-4 or GPT-4o (latest)

**Steps:**
1. Open new chat
2. Paste one test prompt
3. Wait for response
4. Check if bommakugroup.com is cited
5. Document result in tracking sheet (below)

**Note:** ChatGPT's web browsing may be limited. If it says "I don't have access to browse," try rewording: "Based on available information about The Pavillion Boduppal..."

---

### **2. Claude (Anthropic)**

**Platform:** https://claude.ai  
**Model to Use:** Claude 3.5 Sonnet or Claude 3 Opus

**Steps:**
1. Open new conversation
2. Paste test prompt
3. Check response for citations
4. Look for source links

**Note:** Claude may cite sources inline or in a reference section at the end.

---

### **3. Perplexity AI**

**Platform:** https://www.perplexity.ai  
**Model to Use:** Default (it auto-selects best model)

**Steps:**
1. Open Perplexity
2. Paste test prompt
3. **KEY:** Perplexity always shows sources with [1], [2], [3] numbers
4. Check if bommakugroup.com appears in sources
5. Check source ranking (is it [1] or [10]?)

**Why Perplexity Matters Most:**
- Perplexity is designed for search-style queries
- Always shows sources with clickable links
- Higher likelihood of citation if content is well-structured
- **Best platform to test AEO effectiveness**

---

## 📊 **Results Tracking Sheet**

Copy this table to a spreadsheet or document:

| Test # | Prompt | Platform | Cited? | Rank | Accuracy | Source Link | Notes |
|--------|--------|----------|--------|------|----------|-------------|-------|
| 1 | Tell me about The Pavillion... | ChatGPT | Yes/No | #1/#2/etc | ✓/✗ | Yes/No | |
| 1 | Tell me about The Pavillion... | Claude | Yes/No | #1/#2/etc | ✓/✗ | Yes/No | |
| 1 | Tell me about The Pavillion... | Perplexity | Yes/No | [1]/[2]/etc | ✓/✗ | Yes/No | |
| 2 | What is The Pavillion... | ChatGPT | Yes/No | #1/#2/etc | ✓/✗ | Yes/No | |
| ... | ... | ... | ... | ... | ... | ... | |

**Scoring:**
- **Cited?** → Yes = 1 point, No = 0 points
- **Rank** → #1 or [1] = 3 points, #2-3 = 2 points, #4-10 = 1 point, Not cited = 0
- **Accuracy** → All facts correct = 1 point, Some errors = 0.5 points, Major errors = 0
- **Source Link** → Yes = 1 point, No = 0 points

**Citation Success Score = (Total Points / Max Possible) × 100%**

Target: **>70% citation rate** across all prompts = AEO success!

---

## ✅ **Success Criteria**

**Good AEO Performance:**
- ✅ Cited in **7+ out of 10 generic queries** (Category 2)
- ✅ Cited in **15+ out of 16 specific fact queries** (Category 3)
- ✅ Appears in **top 3 sources** on Perplexity
- ✅ Facts are accurate (no hallucinations)
- ✅ bommakugroup.com link provided

**Needs Improvement:**
- ⚠️ Cited in <5 out of 10 generic queries
- ⚠️ Facts are wrong or outdated
- ⚠️ Never appears in top 5 sources
- ⚠️ No attribution to bommakugroup.com

---

## 🕐 **When to Test**

**Immediate (Today):** You can test now to establish a baseline, but AI systems may not have indexed the Quick Facts table yet.

**Optimal (7-14 days):** Wait 1-2 weeks after deployment for AI training data to pick up changes. This gives:
- Web crawlers time to re-index the page
- AI systems time to update their knowledge bases
- Better chance of accurate citation

**Follow-up (30 days):** Re-test after 1 month to see improvement trends.

---

## 📝 **How to Document Results**

Create a document: `AI-CITATION-TEST-RESULTS.md`

**Template:**

```markdown
# AI Citation Test Results — The Pavillion

## Test Date: [DATE]
## Days Since Quick Facts Deployed: [X days]

### Summary
- Total Prompts Tested: X
- Citation Rate: X%
- Average Rank: #X
- Accuracy: X%

### ChatGPT Results
[Paste responses for each prompt]

### Claude Results
[Paste responses for each prompt]

### Perplexity Results
[Paste responses for each prompt]

### Key Findings
- What worked well:
- What needs improvement:
- Surprising results:

### Next Steps
- [ ] Action 1
- [ ] Action 2
```

---

## 🚀 **Next Steps After Testing**

### **If Citation Rate >70%:**
✅ AEO is working!  
✅ Quick Facts table is effective  
✅ Continue monitoring monthly

### **If Citation Rate <50%:**
⚠️ Needs optimization:
1. Add more Quick Facts tables to other pages
2. Enhance schema.org structured data
3. Get more backlinks to increase domain authority
4. Add FAQ schema markup
5. Consider submitting URL directly to AI feedback systems

---

## 🎯 **Pro Tips**

1. **Test in Incognito Mode:** Avoid personalization bias
2. **Test Different Phrasings:** Same question, different wording
3. **Compare Competitors:** Search for other Boduppal villa projects — are they cited more?
4. **Screenshot Everything:** Visual proof for tracking changes over time
5. **Test Monthly:** Track improvement trends

---

## 📞 **Questions?**

If you find errors in AI responses:
- **ChatGPT:** Use feedback thumbs down, report issue
- **Claude:** Use "Report Issue" feature
- **Perplexity:** Flag incorrect source

This helps AI systems improve their citations over time!

---

**Last Updated:** July 12, 2026  
**Next Review:** July 26, 2026 (14 days after Quick Facts deployment)
