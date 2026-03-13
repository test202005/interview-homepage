export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* 首屏定位 */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-5xl font-bold mb-2">韦伟豪</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-3">AI 测试工程师 / 测试开发工程师</p>
        <p className="text-base text-gray-600 mb-4 leading-relaxed max-w-2xl">
          测试工程师，聚焦 AI 辅助测试、Agent / RAG 应用测试与自动化实践。
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
          <a href="mailto:13265586937@163.com" className="hover:text-blue-600">13265586937@163.com</a>
          <span className="hidden sm:inline">|</span>
          <a href="https://github.com/test202005" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub</a>
          <span className="hidden sm:inline">|</span>
          <a href="/resume.pdf" className="hover:text-blue-600">下载简历</a>
        </div>
      </section>

      {/* 核心标签 */}
      <section className="max-w-4xl mx-auto px-6 py-6 border-t border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">核心方向</h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">AI 应用测试</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">AI 辅助测试</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">Agent / RAG / Copilot</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">自动化测试</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">Python / Playwright</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">日志分析 / 回归验证</span>
        </div>
      </section>

      {/* 核心项目 */}
      <section className="max-w-4xl mx-auto px-6 py-6 border-t border-gray-200">
        <h2 className="text-2xl font-semibold mb-5">核心项目</h2>

        {/* 项目 1 */}
        <div className="mb-8 p-5 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-2">AI WorkLog Agent</h3>
          <p className="text-gray-600 mb-3">
            面向团队内部使用的轻量级工作记录 Agent，支持碎片记录、事项确认与今日日报生成。
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gray-200">Agent</span>
            <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gray-200">Tool Call</span>
            <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gray-200">Structured Output</span>
          </div>
          <div className="text-sm text-gray-700 leading-relaxed mb-3">
            <strong>我做了什么：</strong>参与核心流程梳理、行为边界约束与异常场景测试，重点验证输出真实性、稳定性与链路可追踪性。
          </div>
          <a href="/projects/ai-worklog-agent" className="inline-block text-sm text-blue-600 hover:underline">
            查看项目详情 →
          </a>
        </div>

        {/* 项目 2 */}
        <div className="mb-8 p-5 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-2">云境 XR 教学平台（AI Copilot）</h3>
          <p className="text-gray-600 mb-3">
            面向职业院校的 XR 教学平台，在编辑器中集成 AI Copilot，用于基于课程资料生成教学内容。
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gray-200">RAG</span>
            <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gray-200">Trace</span>
            <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gray-200">Bad Case</span>
          </div>
          <div className="text-sm text-gray-700 leading-relaxed mb-3">
            <strong>我做了什么：</strong>负责平台核心业务测试，并围绕 AI Copilot 的 RAG 链路开展异常归因、问题复现与回归验证。
          </div>
          <a href="/projects/xr-ai-copilot" className="inline-block text-sm text-blue-600 hover:underline">
            查看项目详情 →
          </a>
        </div>

        {/* 项目 3 */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-2">米亚新零售平台</h3>
          <p className="text-gray-600 mb-3 text-sm">
            面向跨境零售业务的一体化运营平台，覆盖商城、收银、营销、仓储与物流等核心模块。
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">业务测试</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">自动化</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">性能测试</span>
          </div>
          <div className="text-sm text-gray-700 leading-relaxed">
            <strong>我做了什么：</strong>负责核心业务测试、回归自动化建设及性能验证，支持多版本持续迭代交付。
          </div>
        </div>
      </section>

      {/* 工作经历 */}
      <section className="max-w-4xl mx-auto px-6 py-6 border-t border-gray-200">
        <h2 className="text-2xl font-semibold mb-5">工作经历</h2>

        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
            <h3 className="text-lg font-semibold mb-1 sm:mb-0">中电云计算技术有限公司</h3>
            <span className="text-sm text-gray-500 whitespace-nowrap">2024/09 - 2025/12</span>
          </div>
          <p className="text-gray-600 mb-2">软件测试工程师</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            负责 XR 教学平台、3D 编辑器及 AI 应用相关测试工作，参与需求分析、功能验证、回归测试及上线支持。
          </p>
        </div>

        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
            <h3 className="text-lg font-semibold mb-1 sm:mb-0">深圳市欢乐树科技有限公司</h3>
            <span className="text-sm text-gray-500 whitespace-nowrap">2021/06 - 2024/08</span>
          </div>
          <p className="text-gray-600 mb-2">测试组长</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            负责新零售及平台类业务测试与版本交付，具备多端测试、缺陷管理与自动化推进经验。
          </p>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="max-w-4xl mx-auto px-6 py-6 border-t border-gray-200">
        <p className="text-sm text-gray-400">© 2026 韦伟豪</p>
      </footer>
    </main>
  );
}
