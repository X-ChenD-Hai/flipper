#include <Sonar/ConnectionContextStore.h>

namespace facebook {
namespace flipper {
namespace test {

  class ConnectionContextStoreMock : public ConnectionContextStore {
    public:
      ConnectionContextStoreMock() : ConnectionContextStore(DeviceData()) {
      }
      bool hasRequiredFiles() {
        return true;
      }
      std::string createCertificateSigningRequest() {
        return "thisIsACsr";
      }
      std::shared_ptr<SSLContext> getSSLContext() {
        return nullptr;
      }
      dynamic getConnectionConfig() {
        return nullptr;
      }
      std::string getCertificateDirectoryPath() {
        return "/something/sonar/";
      }
  };

}}}
