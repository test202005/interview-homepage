export default function XRAICopilotPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* 返回首页 */}
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-4">
        <a href="/" className="text-sm text-gray-500 hover:text-blue-600 inline-flex items-center gap-1">
          <span>← 返回首页</span>
        </a>
      </div>

      {/* 页面标题区 */}
      <section className="max-w-4xl mx-auto px-6 py-8 border-b border-gray-200">
        <h1 className="text-4xl font-bold mb-4">云境 XR 教学平台（AI Copilot）</h1>
        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
          面向职业院校的 XR 教学平台，在编辑器中集成 AI Copilot，用于基于课程资料生成教学内容。
        </p>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-gray-700">
          <strong>项目定位：</strong>这个项目的重点不是只验证"能不能回答"，而是从测试视角拆解 RAG 链路，定位回答异常到底出在哪一层。
        </div>
      </section>

      {/* 项目背景 */}
      <section className="max-w-4xl mx-auto px-6 py-8 border-b border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">项目背景</h2>
        <div className="space-y-3 text-gray-700">
          <p className="leading-relaxed">
            云境 XR 教学平台是一套面向职业院校的 XR 课程制作与教学管理系统，由 XR Editor、XR Viewer 及云端管理平台组成。
          </p>
          <p className="leading-relaxed">
            编辑器中集成 AI Copilot，用于基于课程资料生成教学内容。我负责平台核心业务测试，并对 AI Copilot 的 RAG 能力进行专项测试与问题排查。
          </p>
        </div>
      </section>

      {/* RAG ��心链路 */}
      <section className="max-w-4xl mx-auto px-6 py-8 border-b border-gray-200">
        <h2 className="text-2xl font-semibold mb-6">RAG 核心链路</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
              <h3 className="font-semibold text-gray-800">文档解析</h3>
            </div>
            <p className="text-sm text-gray-600">
              解析上传的文档内容，提取文本与结构信息
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
              <h3 className="font-semibold text-gray-800">Chunk 切分</h3>
            </div>
            <p className="text-sm text-gray-600">
              按语义边界切分内容，生成可检索的文本片段
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
              <h3 className="font-semibold text-gray-800">检索</h3>
            </div>
            <p className="text-sm text-gray-600">
              基于问题匹配相关片段，返回最相关的上下文
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
              <h3 className="font-semibold text-gray-800">生成回答</h3>
            </div>
            <p className="text-sm text-gray-600">
              基于检索结果生成回答，引用来源证据
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-5 border border-gray-100 md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">5</span>
              <h3 className="font-semibold text-gray-800">Trace / 日志定位</h3>
            </div>
            <p className="text-sm text-gray-600">
              记录完整执行链路，支持问题回溯与阶段归因
            </p>
          </div>
        </div>
      </section>

      {/* 我负责什么 */}
      <section className="max-w-4xl mx-auto px-6 py-8 border-b border-gray-200">
        <h2 className="text-2xl font-semibold mb-6">我负责什么</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex gap-4">
            <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">核心业务测试</h3>
              <p className="text-sm text-gray-600">
                负责课程创建、资源管理、课程发布等核心业务流程测试，保障 XR 教学内容制作与发布链路稳定
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">自动化与日志分析</h3>
              <p className="text-sm text-gray-600">
                使用 Codex + Playwright 辅助生成自动化脚本，验证编辑器关键操作流程，并结合 AI 分析执行日志辅助失败归因
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">RAG 链路测试</h3>
              <p className="text-sm text-gray-600">
                梳理 AI Copilot 的 RAG 链路，围绕文档解析、Chunk、检索、生成等环节开展专项测试
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Bad Case 构建与归因</h3>
              <p className="text-sm text-gray-600">
                构建 Bad Case 问题集，通过 Trace 日志分析回答来源，定位跨文档知识引用、回答错误及内容污染等问题
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 关键测试点 */}
      <section className="max-w-4xl mx-auto px-6 py-8 border-b border-gray-200">
        <h2 className="text-2xl font-semibold mb-6">关键测试点</h2>
        <div className="bg-amber-50 border border-amber-100 rounded-lg p-6">
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-amber-600 font-semibold text-sm whitespace-nowrap">文档解析</span>
              <p className="text-sm text-gray-700">解析是否完整，是否出现解析异常或内容丢失</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-semibold text-sm whitespace-nowrap">Chunk 质量</span>
              <p className="text-sm text-gray-700">切分是否合理，是否影响后续回答质量</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-semibold text-sm whitespace-nowrap">检索准确</span>
              <p className="text-sm text-gray-700">回答是否与命中文档内容一致，是否存在命中片段但回答错误</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-semibold text-sm whitespace-nowrap">内容污染</span>
              <p className="text-sm text-gray-700">是否出现多文档内容污染、跨文档知识误引用</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-semibold text-sm whitespace-nowrap">链路归因</span>
              <p className="text-sm text-gray-700">能否通过 Trace / 日志判断问题出在解析、切分、检索还是生成阶段</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-semibold text-sm whitespace-nowrap">回归验证</span>
              <p className="text-sm text-gray-700">问题修复后是否能够通过回归验证确认效果稳定</p>
            </div>
          </div>
        </div>
      </section>

      {/* 典型问题与定位 */}
      <section className="max-w-4xl mx-auto px-6 py-8 border-b border-gray-200">
        <h2 className="text-2xl font-semibold mb-6">典型问题与定位</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-indigo-600 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">问题：命中片段但回答错误</h3>
            <p className="text-sm text-gray-600 mb-2">
              检索到了相关文档片段，但生成的回答与片段内容不一致或存在偏差
            </p>
            <div className="bg-gray-50 rounded px-4 py-2 text-sm">
              <span className="font-semibold text-gray-700">定位思路：</span>
              <span className="text-gray-600">结合 Trace 日志查看引用来源，判断是检索结果支撑不足，还是生成阶段偏离证据内容</span>
            </div>
          </div>

          <div className="border-l-4 border-indigo-600 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">问题：多文档内容污染</h3>
            <p className="text-sm text-gray-600 mb-2">
              回答中混入了其他文档的内容，或跨文档误引用知识，导致回答边界混乱
            </p>
            <div className="bg-gray-50 rounded px-4 py-2 text-sm">
              <span className="font-semibold text-gray-700">定位思路：</span>
              <span className="text-gray-600">检查回答引用来源是否跨文档混入，重点关注知识边界是否被错误打通</span>
            </div>
          </div>

          <div className="border-l-4 border-indigo-600 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">问题：文档解析异常或 Chunk 切分不合理</h3>
            <p className="text-sm text-gray-600 mb-2">
              文档解析失败、内容丢失，或 Chunk 粒度导致语义割裂，影响检索效果
            </p>
            <div className="bg-gray-50 rounded px-4 py-2 text-sm">
              <span className="font-semibold text-gray-700">定位思路：</span>
              <span className="text-gray-600">从解析结果与切分粒度入手排查，观察是否导致回答上下文缺失或语义割裂</span>
            </div>
          </div>

          <div className="border-l-4 border-indigo-600 pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">问题：回答异常难以快速归因</h3>
            <p className="text-sm text-gray-600 mb-2">
              当回答不符合预期时，难以快速定位问题出在 RAG 的哪个环节
            </p>
            <div className="bg-gray-50 rounded px-4 py-2 text-sm">
              <span className="font-semibold text-gray-700">处理方式：</span>
              <span className="text-gray-600">按"文档解析 → Chunk → 检索 → 生成"链路逐层拆解，并结合日志与 Bad Case 做阶段归因</span>
            </div>
          </div>
        </div>
      </section>

      {/* 项目收获 */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold mb-6">项目收获 / 沉淀</h2>
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-100">
          <p className="text-gray-700 leading-relaxed">
            这个项目让我对 RAG 测试的理解从"看回答对不对"，进一步扩展到<strong>"看链路是否可信、问题是否可归因、修复后是否可回归验证"</strong>。也让我更明确 AI 应用测试不能只停留在表层结果，而要能够结合链路和证据做问题定位。
          </p>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <a href="/" className="text-sm text-gray-500 hover:text-blue-600">← 返回首页</a>
          <p className="text-sm text-gray-400">© 2026 韦伟豪</p>
        </div>
      </footer>
    </main>
  );
}
