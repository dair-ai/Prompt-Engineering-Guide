# Kimi K2.5

import { Callout } from 'nextra/components'

Moonshot AI released [Kimi K2.5](https://github.com/MoonshotAI/Kimi-K2.5), an open-source multimodal agentic model designed to advance general agentic intelligence. Built on top of the Kimi K2 base model—a trillion-parameter mixture-of-experts (MoE) transformer pre-trained on 15 trillion tokens—K2.5 jointly optimizes text and vision so that the two modalities enhance each other rather than competing for capacity. The model introduces Agent Swarm, a self-directed parallel agent orchestration framework that dynamically decomposes complex tasks into heterogeneous sub-problems and executes them concurrently, reducing latency by up to 4.5x over single-agent baselines.

The post-trained [Kimi K2.5 model checkpoint](https://huggingface.co/moonshotai/Kimi-K2.5) is publicly available on Hugging Face to facilitate future research and real-world applications of agentic intelligence.

<Callout type="info" emoji="🎓">
To learn more about agents and agentic systems, check out our guide on [LLM Agents](https://www.promptingguide.ai/research/llm-agents) and [Deep Agents](https://www.promptingguide.ai/agents/deep-agents).
</Callout>

## Key Contributions

Kimi K2.5 advances the state of the art through two main contributions: joint optimization of text and vision, and Agent Swarm for parallel agent orchestration. Together, these enable strong performance across reasoning, coding, multimodal understanding, agentic tasks, and computer use.

## Joint Optimization of Text and Vision

Most vision-adapted models treat multimodal capability as an add-on to a text backbone, introducing visual tokens late in training at high ratios (e.g., 50% or more). Kimi K2.5 takes a different approach. The team found that early fusion with a lower vision ratio actually yields better results given a fixed total vision-text token budget. Rather than aggressive vision-heavy training concentrated at the end, K2.5 mixes text and vision tokens at a constant moderate ratio throughout the entire training process, letting the model naturally develop balanced multimodal representations over an extended co-optimization period.

Architecturally, Kimi K2.5 employs MoonViT-3D, a three-dimensional native-resolution vision encoder that processes images at their original resolutions without complex sub-image splitting. For video understanding, up to four consecutive frames are treated as a spatiotemporal volume, with 2D patches flattened and packed into a single 1D sequence. This sharing between image and video encoders, combined with 4x temporal compression, lets K2.5 process videos up to 4x longer within the same context window.

### Zero-Vision SFT

A particularly interesting finding in the K2.5 training process is the concept of zero-vision SFT. Instead of requiring manually annotated vision chain-of-thought data for post-training, the team discovered that text-only SFT data is sufficient to activate visual agentic capabilities. All image manipulations are proxied through programmatic operations in IPython, which serves as a generalization of traditional vision tool-use. This enables diverse reasoning behaviors including pixel-level operations, object localization, counting, and OCR—all activated from text-only supervision.

### Visual RL Improves Text Performance

A counterintuitive finding from K2.5's training is that outcome-based visual reinforcement learning actually improves text-only benchmarks. After visual RL, the model showed measurable improvements on purely textual tasks: MMLU-Pro improved from 84.7% to 86.4%, GPQA-Diamond from 84.3% to 86.4%, and LongBench v2 from 56.7% to 58.9%. This suggests that visual RL enhances calibration in areas requiring structured information extraction, contributing to cross-modal generalization that improves textual reasoning without degrading language capabilities.

## Agent Swarm

Most existing agentic models rely on sequential execution of reasoning and tool-calling steps. Even systems capable of hundreds of reasoning steps suffer from linear scaling of inference time, leading to unacceptable latency as agentic workloads grow in scope. Kimi K2.5 introduces Agent Swarm, a dynamic framework for parallel agent orchestration that departs from both sequential chains and pre-specified parallelization heuristics.

### How Agent Swarm Works

Instead of executing a task as a reasoning chain, K2.5 initiates an Agent Swarm through dynamic task decomposition, subagent instantiation, and parallel subtask scheduling. A trainable orchestrator creates specialized frozen subagents and assigns tasks to them. The orchestrator decides what to parallelize and when—decisions that are learned through environmental feedback and RL-driven exploration rather than being hardcoded.

The architecture deliberately decouples the trainable orchestrator from frozen subagents instantiated from fixed intermediate policy checkpoints. During training, subagents are frozen and their execution trajectories are treated as environmental observations rather than differentiable decision points. Only the orchestrator is updated via reinforcement learning. This decoupling circumvents two key challenges: credit assignment ambiguity (a correct answer doesn't mean every subagent performed well) and training instability (noisy, sparse rewards in multi-agent settings).

### PARL: Parallel-Agent Reinforcement Learning

Training the orchestrator to effectively parallelize is non-trivial. The PARL reward function combines three components: a parallelism reward that incentivizes the orchestrator to actually spawn concurrent subagents (preventing "serial collapse" where it defaults to sequential execution), a finish reward that ensures subagents successfully complete their assigned subtasks (preventing "spurious parallelism" where many subagents are spawned without meaningful work), and a performance reward evaluating the overall quality of the solution.

The training uses critical steps—analogous to critical path analysis in computation graphs—rather than total steps as the cost metric. This incentivizes well-balanced task decomposition that shortens the longest parallel branch, minimizing end-to-end latency rather than merely maximizing concurrency.

### Agent Swarm Results

On BrowseComp, Agent Swarm achieves 78.4%, a 17.8% absolute gain over the single-agent K2.5 baseline (60.6%) and surpassing GPT-5.2 Pro (77.9%). WideSearch sees a 6.3% improvement (72.7% to 79.0%) on Item-F1, enabling K2.5 to outperform Claude Opus 4.5 (76.2%) and establish a new state-of-the-art. On the WideSearch benchmark, Agent Swarm reduces execution time by 3-4.5x compared to a single-agent baseline while simultaneously improving accuracy.

Agent Swarm also functions as proactive context management. Long-horizon tasks are decomposed into parallel, semantically isolated subtasks, each executed by a specialized subagent with a bounded local context. Subagents maintain independent working memories and only task-relevant outputs are routed back to the orchestrator, preventing context overflow while preserving structural information and reasoning integrity.

## Token-Efficient RL with Toggle

Kimi K2.5 introduces Toggle, a training heuristic that alternates between inference-time scaling and budget-constrained optimization. During budget-limited phases, the model is trained to solve problems within a task-dependent token budget, producing more concise chain-of-thought reasoning. During standard scaling phases, the model generates responses up to the maximum token limit for harder problems. On average, Toggle decreases output tokens by 25-30% with negligible impact on performance, and the approach shows strong domain generalization even when trained only on math and programming tasks.

## Evaluation Highlights

Kimi K2.5 achieves competitive or state-of-the-art performance with top-tier proprietary models across a wide range of benchmarks:

**Reasoning and Knowledge:** On AIME 2025, K2.5 scores 96.1%, approaching GPT-5.2's perfect score while outperforming Claude Opus 4.5 (92.8%) and Gemini 3 Pro (95.0%). On MMLU-Pro it scores 87.1% and on GPQA-Diamond 87.6%. On HLE (Humanity's Last Exam) with tool-use enabled, the HLE-Full score rises to 50.2%, significantly outperforming Gemini 3 Pro (45.8%) and GPT-5.2 (45.5%).

**Coding and Software Engineering:** K2.5 achieves 76.8% on SWE-Bench Verified and 73.0% on SWE-Bench Multilingual. On LiveCodeBench v6, it reaches 85.0%, surpassing DeepSeek-V3.2 (83.3%) and Claude Opus 4.5 (82.2%).

**Agentic Capabilities:** On BrowseComp, K2.5 achieves 60.6% without context management and 74.9% with Discard-all context management, outperforming GPT-5.2 (65.8%), Claude Opus 4.5 (37.0%), and Gemini 3 Pro (37.8%). On DeepSearchQA (77.1%), K2.5 leads all evaluated models.

**Vision Understanding:** K2.5 scores 78.5% on MMMU-Pro, 84.2% on MathVision, and 92.3% on OCRBench. It also achieves 86.6% on VideoMMU and sets new global records in long-video comprehension with 75.9% on LVBench and 79.8% on LongVideoBench.

**Computer Use:** On OSWorld-Verified, K2.5 achieves a 63.3% success rate on GUI actions, remaining competitive with Claude Opus 4.5 (66.3%) and substantially outperforming open-source models like Qwen3-VL-235B-A22B (38.1%). On WebArena, K2.5 achieves 58.9%, surpassing OpenAI's Operator (58.1%).

## Model Architecture Overview

Kimi K2.5 builds on the Kimi K2 language model—a 1.04 trillion total parameter MoE model utilizing 384 experts with 8 activated per token (32 billion activated parameters). The multimodal architecture consists of three components: MoonViT-3D (vision encoder), an MLP projector, and the Kimi K2 MoE language model. Pre-training processes approximately 15 trillion tokens across three stages: standalone ViT training (1T tokens), joint pre-training at 4K sequence length (15T tokens), and mid-training on high-quality data with long-context activation up to 262K sequence length.

## References

- [Kimi K2.5 Technical Report](https://github.com/MoonshotAI/Kimi-K2.5)
- [Kimi K2.5 Model Checkpoint (Hugging Face)](https://huggingface.co/moonshotai/Kimi-K2.5)
- [Kimi K2 Technical Report](https://arxiv.org/abs/2507.20534)
- [Kimi K2-Thinking](https://moonshotai.github.io/Kimi-K2/thinking.html)
- [Kimi-Researcher: End-to-End RL Training for Emerging Agentic Capabilities](https://moonshotai.github.io/Kimi-Researcher/)
