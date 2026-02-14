import React, { useState } from 'react';
import { FaDownload, FaFileAlt, FaImage, FaLink, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function CourseContent({ lesson, section }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [showResources, setShowResources] = useState(true);

  // Mock resources data (karena di courseData.js masih kosong)
  const mockResources = [
    {
      id: 1,
      title: 'Background image.png',
      type: 'image',
      size: '2.5 MB',
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'Asset.rar',
      type: 'file',
      size: '15.2 MB',
      downloadUrl: '#'
    }
  ];

  const getResourceIcon = (type) => {
    switch (type) {
      case 'image':
        return <FaImage className="text-blue-500" />;
      case 'file':
        return <FaFileAlt className="text-gray-500" />;
      case 'link':
        return <FaLink className="text-green-500" />;
      default:
        return <FaFileAlt className="text-gray-500" />;
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', count: null },
    { id: 'resources', label: 'Resource yang diperlukan', count: mockResources.length }
  ];

  return (
    <div className="max-w-4xl">
      {/* Lesson Title and Info */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {lesson?.title || 'Pilih lesson untuk melihat konten'}
        </h1>
        <p className="text-gray-600">
          {section?.title} • {lesson?.duration}
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
              {tab.count !== null && (
                <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                  activeTab === tab.id
                    ? 'bg-orange-100 text-orange-600'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Pengenalan tools laso tool
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Pada bagian ini, kita akan mempelajari penggunaan tools laso dalam software design. 
                Tools ini sangat berguna untuk melakukan seleksi area yang kompleks dan tidak beraturan. 
                Anda akan belajar teknik-teknik dasar hingga advanced dalam menggunakan laso tool untuk 
                berbagai keperluan editing dan design.
              </p>
            </div>

            <div>
              <h4 className="text-md font-semibold text-gray-900 mb-2">
                Yang akan Anda pelajari:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Pengenalan interface laso tool</li>
                <li>Teknik seleksi dasar dengan laso</li>
                <li>Penggunaan magnetic laso untuk edge detection</li>
                <li>Tips dan trik untuk hasil seleksi yang presisi</li>
                <li>Kombinasi laso tool dengan tools lainnya</li>
              </ul>
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Resource yang diperlukan
              </h3>
              <button
                onClick={() => setShowResources(!showResources)}
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-700"
              >
                <span className="text-sm">
                  {showResources ? 'Sembunyikan' : 'Tampilkan'}
                </span>
                {showResources ? (
                  <FaChevronUp className="text-sm" />
                ) : (
                  <FaChevronDown className="text-sm" />
                )}
              </button>
            </div>

            {showResources && (
              <div className="space-y-3">
                {mockResources.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        {getResourceIcon(resource.type)}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {resource.title}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {resource.size}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => window.open(resource.downloadUrl, '_blank')}
                      className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      <FaDownload className="text-sm" />
                      <span className="text-sm font-medium">Download</span>
                    </button>
                  </div>
                ))}

                {mockResources.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <FaFileAlt className="mx-auto text-4xl mb-3 text-gray-300" />
                    <p>Tidak ada resource untuk lesson ini</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Next Lesson Button */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <button className="w-full sm:w-auto px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors">
          Next Lesson
        </button>
      </div>
    </div>
  );
}

export default CourseContent;
